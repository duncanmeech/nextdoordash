import { getCannonicalURI } from "./utils/image";
import { InView } from "react-intersection-observer";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,height=120,format=auto/${source}`;
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
      <div key={id} className="menu">
        <div className="menu-name">{menuName}</div>
        <div className="grid">
          {items.map((item) => {
            const { name, description, displayPrice, id, imageUrl } = item;
            return (
              <a key={id} onClick={(e) => this.onItemClicked(e, item)}>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <div className="box" ref={ref}>
                      {inView && (
                        <React.Fragment>
                          <div className="box-left">
                            <span className="item-name">{name}</span>
                            <span className="item-description">
                              {description}
                            </span>
                            <span className="item-price">{displayPrice}</span>
                          </div>
                          <div className="image">
                            <img
                              className="img"
                              src={optimalImageUrl(imageUrl)}
                            />
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  )}
                </InView>
              </a>
            );
          })}
        </div>
        <style jsx>{`
          .menu {
            width: 100%;
            margin-top: 40px;
          }
          .menu-name {
            font-size: 24px;
            margin-bottom: 8px;
            font-family: TTNorms-Bold;
          }
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 16px;
            grid-row-gap: 16px;
          }
          @media (max-width: 800px) {
            .grid {
              grid-template-columns: 1fr;
            }
          }
          .box {
            width: 100%;
            height: 120px;
            border: 1px solid lightgray;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            cursor: pointer;
          }
          .box-left {
            width: 100%;
            height: 100%;
            padding-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .item-name {
            font-size: 16px;
            font-family: TTNorms-Bold;
            color: black;
            margin-bottom: 8px;
          }
          .item-description {
            font-size: 14px;
            font-family: TTNorms;
            color: gray;
            margin-bottom: 8px;
          }
          .item-price {
            font-size: 14px;
            color: gray;
          }
          .image {
            width: 120px;
            height: 120px;
            flex-shrink: 0;
          }
          .img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}
