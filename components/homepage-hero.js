const HERO_IMAGE =
  "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=800,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/hero/food/mobile_food.png";

export default function HomePageHero() {
  return (
    <div className="home-page-hero">
      <div className="sign-in-out" />
      <div className="splash" />
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
        .sign-in-out {
          height: 40px;
          background-color: rgba(0, 0, 0, 0.2);
          margin-top: 20px;
        }
        .splash {
          height: 170px;
          background-color: rgba(0, 0, 0, 0.2);
          margin-top: 110px;
          margin-bottom: 96px;
        }
      `}</style>
    </div>
  );
}
