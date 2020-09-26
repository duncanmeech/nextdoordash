import dynamic from "next/dynamic";
import fetch from "node-fetch";
import Head from "next/head";
import Hero from "../../components/hero";
import Menu from "../../components/menu";

const ItemModal = dynamic(() => import("../../components/item-modal"), {
  ssr: false,
});

class StorePage extends React.Component {
  state = {
    itemModalOpen: false,
    storePageFeed: null,
    selectedItem: null,
  };

  componentDidMount() {
    fetch("/storepage.json").then((response) => {
      response.json().then((json) => {
        const { data } = json;
        const { storepageFeed } = data;
        this.setState({ storepageFeed });
      });
    });
  }

  // visibility management for the item modal
  onOpenItemModal = (item) => {
    this.setState({ itemModalOpen: true, selectedItem: item });
  };

  onCloseItemModal = () => {
    this.setState({ itemModalOpen: false, selectedItem: null });
  };

  render() {
    const { storeName, storeImage, timing } = this.props;
    const { storepageFeed, itemModalOpen, selectedItem } = this.state;
    let menus;
    if (storepageFeed) {
      menus = storepageFeed.itemLists;
    }

    return (
      <React.Fragment>
        <Head>
          <title>Doordash - Store Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {itemModalOpen && (
          <ItemModal menuItem={selectedItem} closed={this.onCloseItemModal} />
        )}

        <div className="page">
          <div className="container">
            <Hero
              storeName={storeName + " " + timing}
              storeImage={storeImage}
            />
            {menus &&
              menus.map((menu, index) => (
                <Menu
                  key={index}
                  menu={menu}
                  onOpenItemModal={this.onOpenItemModal}
                />
              ))}
          </div>
        </div>

        <style jsx>{`
          .menu {
            font-size: 24px;
            font-weight: bold;
            text-align: left;
            width: 100%;
          }
          .page {
            display: flex;
            justify-content: center;
            flex-direction: row;
            font-family: TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }
          .container {
            width: calc(100% - 40px);
            max-width: 1000px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 20px;
          }

          @font-face {
            font-family: "TTNorms";
            src: url("https://typography.doordash.com/TTNorms-Regular.woff2")
              format("woff");
          }

          @font-face {
            font-family: "TTNorms-Medium";
            src: url("https://typography.doordash.com/TTNorms-Medium.woff2")
              format("woff");
          }

          @font-face {
            font-family: "TTNorms-Bold";
            src: url("https://typography.doordash.com/TTNorms-Bold.woff2")
              format("woff");
          }
        `}</style>
      </React.Fragment>
    );
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Better way to do this, but for now this works for local dev
// and vercel since fetch etc needs an absolute path
const getAbsoluteRoot = (context) => {
  if (context.req.headers.host.indexOf("localhost") >= 0) {
    return "http://localhost:3000";
  }
  return "https://nextdoordash.vercel.app";
};

export async function getServerSideProps(context) {
  const start = Date.now();
  const response = await fetch(`${getAbsoluteRoot(context)}/storepage.json`);
  // const response = await fetch(
  //   "https://nextdoordash.vercel.app/storepage.json"
  // );
  const feed = await response.json();
  // await sleep(1000);
  return {
    props: {
      storeName: feed.data.storepageFeed.storeHeader.name,
      storeImage: feed.data.storepageFeed.storeHeader.businessHeaderImgUrl,
      timing: Date.now() - start,
    },
  };
}

export default StorePage;
