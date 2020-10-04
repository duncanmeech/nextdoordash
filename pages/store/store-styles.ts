import styled from "styled-components";
import DLS from "../../styles/doordash-styles";

const ContentPadding = 20;
const ContentMaxWidth = 1000;

export const Dummy = styled.div`
  width: 100%;
`;
export default Dummy;

export const ContentArea = styled.div`
  width: calc(100vw - ${DLS.CheckoutSidebarWidth}px);
  min-height: 100vh;
  display: inline-flex;
  justify-content: center;
  padding: $headerHeight 0 0 0;

  @media (max-width: ${DLS.BreakpointDesktop}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${ContentMaxWidth}px;
  padding: ${DLS.HeaderHeight}px ${ContentPadding}px;
`;

export const CheckoutArea = styled.div`
  width: ${DLS.CheckoutSidebarWidth}px;
  height: calc(100vh - ${DLS.HeaderHeight}px);
  flex-shrink: 0;
  position: fixed;
  top: ${DLS.HeaderHeight}px;
  right: 0;

  @media (max-width: ${DLS.BreakpointDesktop}px) {
    display: none;
  }
}
`;
