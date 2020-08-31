import Head from "next/head";
import HomePageHero from "../components/homepage-hero";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Doordash</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://typography.doordash.com/TTNorms-Regular.woff2"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          href="https://typography.doordash.com/TTNorms-Medium.woff2"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          href="https://typography.doordash.com/TTNorms-Bold.woff2"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          href="https://typography.doordash.com/TTNorms-ExtraBold.woff2"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          href="https://typography.doordash.com/SourceSerifPro-Regular.woff2"
          type="font/woff2"
          as="font"
        />
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
