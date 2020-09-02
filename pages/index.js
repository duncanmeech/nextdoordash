import Head from "next/head";
import HomePageHero from "../components/homepage-hero";
import StoreFeed from "../components/store-feed";
import TopCities from "../components/top-cities";
import { useRouter } from "next/router";

function Home({ stores }) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Doordash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageHero
          stores={stores}
          activated={() => router.push("/address")}
        />
      </main>

      <br />

      <footer>
        <TopCities />
      </footer>

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
          width: 100vw;
          overflow-x: hidden;
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

/**
 * server side properties for SSR
 * @param  ctx
 */
Home.getInitialProps = async (ctx) => {
  return StoreFeed(100);
};

export default Home;
