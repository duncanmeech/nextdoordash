import styled from "styled-components";
import DLS from "../../styles/doordash-styles";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${DLS.HeaderHeight}px;
  border-bottom: 1px solid ${DLS.Gray};
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  margin-right: 20px;
`;
