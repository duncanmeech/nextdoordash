import Head from "next/head";
export default function () {
  return (
    <Head>
      <title>Doordash - Store Page</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="https://typography.doordash.com/TTNorms-Regular.woff2"
        type="font/woff2"
        crossorigin="anonymous"
        as="font"
      />
      <link
        rel="preload"
        href="https://typography.doordash.com/TTNorms-Medium.woff2"
        type="font/woff2"
        as="font"
        crossorigin="anonymous"
      />
      <link
        rel="preload"
        href="https://typography.doordash.com/TTNorms-Bold.woff2"
        type="font/woff2"
        as="font"
        crossorigin="anonymous"
      />
    </Head>
  );
}
