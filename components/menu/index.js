import styles from "./menu.module.scss";
import { getCannonicalURI } from "../utils/image";
import { InView } from "react-intersection-observer";

const { imageSize } = styles;

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=${imageSize},height=${imageSize},format=auto,quality=50/${source}`;
};

export default class Menu extends React.PureComponent {
  onItemClicked(e, item) {
    const { onOpenItemModal } = this.props;
    e.preventDefault();
    onOpenItemModal(item);
  }

  render() {
    const { menu } = this.props;
    const { name: menuName, id, items } = menu;

    return (
      <div key={id} className={styles.menu}>
        <div className={styles.menuname}>{menuName}</div>
        <div className={styles.grid}>
          {items.map((item) => {
            const { name, description, displayPrice, id, imageUrl } = item;
            return (
              <a key={id} onClick={(e) => this.onItemClicked(e, item)}>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div className={styles.box} ref={ref}>
                      {inView && (
                        <React.Fragment>
                          <div className={styles.boxleft}>
                            <span className={styles.itemname}>{name}</span>
                            <span className={styles.itemdescription}>
                              {description}
                            </span>
                            <span className={styles.itemprice}>
                              {displayPrice}
                            </span>
                          </div>
                          {imageUrl && (
                            <div className={styles.image}>
                              <img
                                className={styles.img}
                                src={optimalImageUrl(imageUrl)}
                              />
                            </div>
                          )}
                        </React.Fragment>
                      )}
                    </div>
                  )}
                </InView>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
