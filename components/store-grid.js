/**
 * store cards in a grid
 */
export default function ({ stores }) {
  return (
    <div className="grid">
      {stores.map((store) => (
        <div className="store" key={store.imageUrl}>
          <img className="store-image" src={store.imageUrl} />
          <span className="store-title">{store.title}</span>
          <span className="store-subtitle">{store.subTitle}</span>
        </div>
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          margin: 0 20px;
          grid-template-columns: calc(50% - 10px) calc(50% - 10px);
          grid-column-gap: 20px;
          grid-row-gap: 20px;
        }
        .store {
          display: flex;
          flex-direction: column;
        }
        .store-image {
          width: 100%;
          height: 100%;
          height: 165px;
          object-fit: cover;
          border-radius: 9px;
          margin-bottom: 4px;
        }
        .store-title {
          font-size: 14px;
          font-family: TTNorms-Bold;
          color: rgb(73, 73, 73);
          margin-bottom: 4px;
        }
        .store-subtitle {
          font-size: 14px;
          font-family: TTNorms;
          color: rgb(118, 118, 118);
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
}
