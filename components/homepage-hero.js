const HERO_IMAGE =
  "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=800,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/hero/food/mobile_food.png";

import { Logo, Mag, RightArrow } from "./icons";

export default function HomePageHero() {
  return (
    <div className="home-page-hero">
      <div className="sign-in-out-container">
        <button className="sign-in-out sign-in">Sign In</button>
        <button className="sign-in-out sign-out">Sign Out</button>
      </div>
      <div className="splash">
        <Logo />
        <br />
        <span>Your favorite</span>
        <span>restaurants, delivered</span>
        <br />
        <div className="address">
          <Mag />
          <input placeholder="Enter Delivery Address" />
          <RightArrow />
        </div>
      </div>
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
        .sign-in-out {
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
          border-radius: 1000px;
          padding: 8px 12px;
          outline: none;
          box-sizing: content-box;
          border: 4px solid transparent;
        }
        .sign-in-out:focus {
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
      `}</style>
    </div>
  );
}
