export default function ({ storeName, storeImage }) {
  return (
    <div className="hero">
      <img className="image" src={storeImage} />
      <div className="name">{storeName}</div>
      <style jsx>{`
        .hero {
          width: 100%;
        }
        .image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: left;
        }

        .name {
          font-size: 30px;
          font-family: sans-serif;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
