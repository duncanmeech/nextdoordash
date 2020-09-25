import { getCannonicalURI } from "./utils/image";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto/${source}`;
};

export default class ItemModal extends React.PureComponent {
  render() {
    const { menuItem, closed } = this.props;
    const { imageUrl } = menuItem;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <img className="image" src={optimalImageUrl(imageUrl)} />
          <button className="button" onClick={closed}>
            Close
          </button>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.25);

            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal {
            width: 50vw;
            height: 50vh;
            padding: 16px;
            max-width: 600px;
            min-width: 300px;
            border-radius: 9px;
            background-color: white;
            overflow: hidden;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .image {
            width: 100%;
            overflow: hidden;
            object-fit: cover;
          }
          .button {
            color: white;
            background-color: rgb(235, 23, 0);
            font-size: 14px;
            font-family: TTNorms-Bold;
            line-height: 24px;
            border-radius: 1000px;
            padding: 4px 12px;
            outline: none;
            box-sizing: content-box;
            border: 4px solid transparent;
          }
          .button:focus {
            border: 4px solid rgba(0, 0, 255, 0.4);
          }
        `}</style>
      </div>
    );
  }
}
