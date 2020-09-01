import Head from "next/head";
import HomePageHero from "../components/homepage-hero";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Doordash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePageHero />
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
