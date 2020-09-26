import styles from "./hero.module.css";
import { getCannonicalURI } from "../utils/image";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1000,format=auto,quality=50/${source}`;
};

export default function ({ storeName, storeImage }) {
  return (
    <div className={styles.hero}>
      <img className={styles.image} src={optimalImageUrl(storeImage)} />
      <div className={styles.name}>{storeName}</div>
    </div>
  );
}
