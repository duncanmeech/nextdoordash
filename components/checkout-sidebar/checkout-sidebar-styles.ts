import styled from "styled-components";
import DLS from "../../styles/doordash-styles";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - ${DLS.HeaderHeight}px);
  border-left: 1px solid ${DLS.Gray};
  padding-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 20px;
  }

  @media (max-width: ${DLS.BreakpointDesktop}px) {
    display: none;
  }
`;

export const Prompt = styled.div`
  color: ${DLS.Gray};
  font-size: 14px;
  margin-bottom: 4px;
`;
