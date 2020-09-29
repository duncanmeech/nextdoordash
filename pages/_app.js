import styles from "./_app.css";
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
    return <Component {...pageProps} />;
  }
}
