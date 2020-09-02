import { Logo } from "./icons";
import StoreGrid from "./store-grid";
import AddressPicker from "./address-picker";

const HERO_IMAGE =
  "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=800,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/hero/food/mobile_food.png";

export default function ({ stores }) {
  return (
    <main>
      <div className="home-page-hero">
        <div className="sign-in-out-container">
          <button className="round-button sign-in">Sign In</button>
          <button className="round-button sign-out">Sign Out</button>
        </div>
        <div className="splash">
          <Logo />
          <br />
          <span>Your favorite</span>
          <span>restaurants, delivered</span>
          <br />
          <AddressPicker />
        </div>
      </div>
      <div className="app-upsell">
        <span className="app-upsell-text">
          Get the best DoorDash experience
        </span>
        <button className="round-button app-upsell-button">Get the app</button>
      </div>
      <p className="local-favorites">Local Favorites</p>
      <StoreGrid stores={stores} />
      <style jsx>{`
        .home-page-hero {
          background-image: url(${HERO_IMAGE});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          width: 100vw;

          display: flex;
          flex-direction: column;
        }
        .sign-in-out-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          margin-right: 20px;
        }
        .round-button {
          font-size: 14px;
          font-family: TTNorms-Bold;
          line-height: 24px;
          border-radius: 1000px;
          padding: 4px 12px;
          outline: none;
          box-sizing: content-box;
          border: 4px solid transparent;
        }
        .round-button:focus {
          border: 4px solid rgba(0, 0, 255, 0.4);
        }
        .sign-in {
          background-color: transparent;
          color: white;
        }
        .sign-out {
          background-color: white;
          color: rgb(73, 73, 73);
        }
        .splash {
          margin-top: 50px;
          margin-bottom: 96px;
          color: white;
          line-height: 40px;
          font-size: 32px;
          letter-spacing: -0.04ch;
          text-align: center;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 60vw;
          font-size: 18px;
          line-height: 24px;
          border-radius: 1000px;
          padding: 8px 12px;
          outline: none;
          box-sizing: content-box;
          border: 4px solid transparent;
          background-color: white;
          color: rgb(73, 73, 73);
        }
        .address input {
          border: none;
          outline: none;
          font-size: 14px;
        }

        .address svg {
          flex-shrink: 0;
        }

        .app-upsell {
          display: flex;
          margin: 20px 20px;
          padding-bottom: 20px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid lightgray;
        }
        .app-upsell-text {
          font-size: 14px;
          font-family: TTNorms-Bold;
          width: 50%;
          color: rgb(73, 73, 73);
        }
        .app-upsell-button {
          color: white;
          background-color: rgb(235, 23, 0);
        }
        .local-favorites {
          margin: 0 20px;
          font-size: 18px;
          font-family: TTNorms-Bold;
          color: rgb(73, 73, 73);
        }
      `}</style>
    </main>
  );
}
