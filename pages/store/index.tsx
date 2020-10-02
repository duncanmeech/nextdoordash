import React from "react";
import { ContentArea, Content, CheckoutArea } from "./store-styles";
import dynamic from "next/dynamic";
import DocumentHead from "./document-head";
import Hero from "../../components/hero";
import Header from "../../components/header";
import CheckoutSidebar from "../../components/checkout-sidebar";

/**
 * import client side AND only as needed. The bundle containing
 * this component will ONLY be loaded when an <ItemModal /> is actually rendered.
 */
const ItemModal = dynamic(() => import("../../components/item-modal"), {
  ssr: false,
});

/**
 * Menu is not needed until we load menus on the client side
 */
const Menu = dynamic(() => import("../../components/menu"), {
  ssr: false,
});

type Props = {
  storeName: string;
  storeImage?: string;
  logoImage?: string;
};

class StorePage extends React.Component<Props> {
  state = {
    itemModalOpen: false,
    storepageFeed: null,
    selectedItem: null,
  };

  componentDidMount() {
    fetch("/storepage-cheese.json").then((response) => {
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
        <ContentArea>
          <Content>
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
          </Content>
        </ContentArea>
        <CheckoutArea>
          <CheckoutSidebar />
        </CheckoutArea>
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
  const response = await fetch(
    `${getAbsoluteRoot(context)}/storeheader-cheese.json`
  );
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
