import styles from "./_app.css";
import Head from "next/head";
import App from "next/app";
import KeyValue from "../components/utils/keyvalue";

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  // for now we store for later display
  const metrics = KeyValue.get("metrics", {});
  const key = `${metric.label}/${metric.name}`;
  const value = metric.value;
  metrics[key] = value;
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=2"
          />
          <link
            rel="preload"
            href="https://typography.doordash.com/TTNorms-Regular.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
            as="font"
          />
          <link
            rel="preload"
            href="https://typography.doordash.com/TTNorms-Medium.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
            as="font"
          />
          <link
            rel="preload"
            href="https://typography.doordash.com/TTNorms-Bold.woff2"
            type="font/woff2"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
