import styles from "./header.module.scss";

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="/doordash-logo.svg"
          alt="doordash logo"
          title="doordash logo"
        />
        <img src="/doordash-name.svg" alt="doordash" title="doordash" />
      </div>
    );
  }
}
