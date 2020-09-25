import { getCannonicalURI } from "./utils/image";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,height=250,width=1000,format=webp,quality=50/${source}`;
};

export default function ({ storeName, storeImage }) {
  return (
    <div className="hero">
      <img className="image" src={optimalImageUrl(storeImage)} />
      <div className="name">{storeName}</div>
      <style jsx>{`
        .hero {
          width: 100%;
          margin-bottom: 40px;
        }
        .image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: left;
        }

        .name {
          font-size: 30px;
          font-family: TTNorms-Bold;
        }
      `}</style>
    </div>
  );
}
