import styles from "./item-modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { getCannonicalURI } from "../utils/image";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto/${source}`;
};

type Props = {
  menuItem: any;
  closed: () => void;
};

export default class ItemModal extends React.PureComponent<Props> {
  render() {
    const { menuItem, closed } = this.props;
    const { imageUrl } = menuItem;

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <img className={styles.image} src={optimalImageUrl(imageUrl)} />
          <button className={styles.button} onClick={closed}>
            Close
          </button>
        </div>
      </div>,
      document.body
    );
  }
}
