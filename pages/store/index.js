import fetch from "node-fetch";
import Head from "next/head";
import Hero from "../../components/hero";
import Menu from "../../components/menu";

class StorePage extends React.Component {
  state = {};

  componentDidMount() {
    fetch("/storepage.json").then((response) => {
      response.json().then((json) => {
        const { data } = json;
        const { storepageFeed } = data;
        this.setState({ storepageFeed });
      });
    });
  }

  render() {
    const { storeName, storeImage } = this.props;
    const { storepageFeed } = this.state;
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

        <div className="page">
          <div className="container">
            <Hero storeName={storeName} storeImage={storeImage} />
            {menus &&
              menus.map((menu, index) => <Menu key={index} menu={menu} />)}
          </div>
        </div>

        <style jsx>{`
          .menu {
            font-size: 24px;
            font-weight: bold;
            text-align: left;
            width: 100%;
            font-family: sans-serif;
          }
          .page {
            display: flex;
            justify-content: center;
            flex-direction: row;
          }
          .container {
            width: calc(100% - 40px);
            max-width: 1000px;
            font-family: sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 20px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export async function getServerSideProps(context) {
  console.log(context);
  //const response = await fetch("http://localhost:3000/storepage.json");
  const response = await fetch("/storepage.json");
  const feed = await response.json();
  return {
    props: {
      storeName: feed.data.storepageFeed.storeHeader.name,
      storeImage: feed.data.storepageFeed.storeHeader.businessHeaderImgUrl,
    },
  };
}

export default StorePage;
