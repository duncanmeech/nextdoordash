import styles from "./store.module.scss";
import dynamic from "next/dynamic";
import fetch from "node-fetch";
import DocumentHead from "./document-head";
import Hero from "../../components/hero";
import Menu from "../../components/menu";
import Header from "../../components/header";
import CheckoutSidebar from "../../components/checkout-sidebar";

/**
 * import client side AND only as needed. The bundle containing
 * this component will ONLY be loaded when an <ItemModal /> is actually rendered.
 */
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
    const { storeName, storeImage, logoImage } = this.props;
    const { storepageFeed, itemModalOpen, selectedItem } = this.state;
    let menus;
    if (storepageFeed) {
      menus = storepageFeed.itemLists;
    }

    return (
      <React.Fragment>
        <DocumentHead />
        <div className={styles.nonCheckout}>
          <div className={styles.content}>
            <Hero
              storeName={storeName}
              storeImage={storeImage}
              logoImage={logoImage}
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
        <div className={styles.checkout}>
          <CheckoutSidebar />
        </div>
        <Header />
        {itemModalOpen && (
          <ItemModal menuItem={selectedItem} closed={this.onCloseItemModal} />
        )}
      </React.Fragment>
    );
  }
}

// Better way to do this, but for now this works for local dev
// and vercel since fetch etc needs an absolute path
const getAbsoluteRoot = (context) => {
  if (context.req.headers.host.indexOf("localhost") >= 0) {
    return "http://localhost:3000";
  }
  return "https://nextdoordash.vercel.app";
};

/**
 * Get the server side properties for the store page. Generally this
 * is above the fold content for the page and necessary API calls.
 * @param {} context
 */
export async function getServerSideProps(context) {
  const response = await fetch(`${getAbsoluteRoot(context)}/storeheader.json`);
  const feed = await response.json();
  return {
    props: {
      storeName: feed.storeHeader.name,
      storeImage: feed.storeHeader.businessHeaderImgUrl,
      logoImage: feed.storeHeader.coverSquareImgUrl,
    },
  };
}

export default StorePage;
