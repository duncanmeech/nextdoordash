import React, { Fragment } from "react";
import styles from "./hero.module.scss";
import { getCannonicalURI } from "../utils/image";

// destructure SCSS variables from the style object
const { heroHeight, logoSize } = styles;

const optimalHeroImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=${heroHeight},format=auto,quality=50/${source}`;
};

const optimalLogoImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,height=${logoSize},format=auto,quality=72/${source}`;
};

export default function ({ storeName, storeImage, logoImage }) {
  return (
    <div className={styles.hero}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={optimalHeroImageUrl(storeImage)}
            alt={storeName}
            loading="eager"
          />
        </div>
        {logoImage && (
          <Fragment>
            <div className={styles.triangle} />
            <div className={styles.logoContainer}>
              <div className={styles.logoInner} />
              <img
                className={styles.logoImage}
                src={optimalLogoImageUrl(logoImage)}
                alt={storeName}
              />
            </div>
          </Fragment>
        )}
      </div>
      <div className={styles.name}>{storeName}</div>
    </div>
  );
}
