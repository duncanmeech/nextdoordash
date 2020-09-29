import styles from "./item-modal.module.scss";
import React from "react";
import ReactDOM from "react-dom";
import { getCannonicalURI } from "../utils/image";
import KeyValue from "../utils/keyvalue";

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
    const { imageUrl, name, description } = menuItem;
    const metrics = KeyValue.get("metrics", {});

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <div className={styles.textArea}>
            <div className={styles.title}>{name}</div>
            <div className={styles.description}>{description}</div>
          </div>
          <img className={styles.image} src={optimalImageUrl(imageUrl)} />
          <div className={styles.optionsArea}>
            <ul>
              {Object.keys(metrics).map((key) => {
                return <li key={key}>{`${key} - ${metrics[key]}`}</li>;
              })}
            </ul>
          </div>
          <button className={styles.button} onClick={closed}>
            Close
          </button>
        </div>
      </div>,
      document.body
    );
  }
}
