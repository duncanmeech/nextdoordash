import Head from "next/head";
import HomePageHero from "../components/homepage-hero";

function Home({ stores }) {
  return (
    <div className="container">
      <Head>
        <title>Doordash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageHero stores={stores} />
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        @font-face {
          font-family: "TTNorms";
          src: url("https://typography.doordash.com/TTNorms-Regular.woff2")
            format("woff");
        }

        @font-face {
          font-family: "TTNorms-Medium";
          src: url("https://typography.doordash.com/TTNorms-Medium.woff2")
            format("woff");
        }

        @font-face {
          font-family: "TTNorms-Bold";
          src: url("https://typography.doordash.com/TTNorms-Bold.woff2")
            format("woff");
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        stores: [
          {
            title: "McDonald's",
            subTitle: "18 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/bd30422d-bde1-4669-82cc-dc27499a3cd1-retina-large.jpg",
          },
          {
            title: "Chick-fil-A",
            subTitle: "23 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/bce009d8-f09c-4164-b5a2-5344a3867f1a-retina-large.jpg",
          },
          {
            title: "Panda Express",
            subTitle: "12 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/364baf50-6c3e-4fff-9abc-81311da4f2c5-retina-large-jpeg",
          },
          {
            title: "Taqueria Mi Pueblo",
            subTitle: "53 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/55194990-b61c-4bff-a336-097980f6a0ff-retina-large.jpg",
          },
          {
            title: "Chipotle",
            subTitle: "22 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/4ee47a6f-c66d-4f65-ab19-10c778117f3e-retina-large.jpg",
          },
          {
            title: "Acme Burger",
            subTitle: "31 mins • Free delivery",
            imageUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=320,format=auto,quality=50/https://cdn.doordash.com/media/photos/29e683d7-3f1f-41ac-a479-7518f0aa3e61-retina-large.jpg",
          },
        ],
      });
    }, 100);
  });
};

export default Home;
