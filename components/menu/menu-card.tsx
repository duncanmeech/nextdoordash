import React, { Fragment } from "react";
import styles from "./menu.module.scss";
import { getCannonicalURI } from "../utils/image";
import { InView } from "react-intersection-observer";

const { imageSize } = styles;

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=${imageSize},height=${imageSize},format=auto,quality=50/${source}`;
};

type Props = {
  item: any;
  cardClicked: () => void;
};

export default class MenuCard extends React.PureComponent<Props> {
  render() {
    const { item, cardClicked } = this.props;
    const { name, description, displayPrice, imageUrl } = item;

    return (
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className={styles.box} ref={ref} onClick={cardClicked}>
            {inView && (
              <Fragment>
                <div className={styles.boxleft}>
                  <span className={styles.itemname}>{name}</span>
                  <span className={styles.itemdescription}>{description}</span>
                  <span className={styles.itemprice}>{displayPrice}</span>
                </div>
                {imageUrl && (
                  <div className={styles.image}>
                    <img
                      className={styles.img}
                      src={optimalImageUrl(imageUrl)}
                    />
                  </div>
                )}
              </Fragment>
            )}
          </div>
        )}
      </InView>
    );
  }
}
