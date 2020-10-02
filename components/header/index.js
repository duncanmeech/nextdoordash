import { HeaderContainer, Logo } from "./header-styles";

export default class Header extends React.PureComponent {
  render() {
    return (
      <HeaderContainer>
        <Logo
          src="/doordash-logo.svg"
          alt="doordash logo"
          title="doordash logo"
        />
        <img src="/doordash-name.svg" alt="doordash" title="doordash" />
      </HeaderContainer>
    );
  }
}
