import { getCannonicalURI } from "./utils/image";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,height=120,format=auto/${source}`;
};

export default function ({ menu }) {
  const { name, id, items } = menu;
  console.dir(menu);
  return (
    <div key={id} className="menu">
      <div className="menu-name">{name}</div>
      <div className="grid">
        {items.map((item) => {
          const { name, description, displayPrice, id, imageUrl } = item;
          return (
            <div className="box">
              <div className="box-left">
                <span className="item-name">{name}</span>
                <span className="price">{displayPrice}</span>
              </div>
              <div className="image">
                <img className="img" src={optimalImageUrl(imageUrl)} />
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .menu {
          width: 100%;
          margin-top: 20px;
        }
        .menu-name {
          font-size: 24px;
          margin-bottom: 8px;
          font-family: sans-serif;
          font-weight: bold;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 16px;
          grid-row-gap: 16px;
        }
        .box {
          width: 100%;
          height: 120px;
          border: 1px solid lightgray;
          border-radius: 5px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
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
          font-family: sans-serif;
          font-size: 16px;
          font-weight: bold;
          color: black;
        }
        .price {
          font-family: sans-serif;
          font-size: 16px;
          color: gray;
        }
        .image {
          width: 120px;
          height: 120px;
          flex-shrink: 0;
          background-color: lightgray;
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
