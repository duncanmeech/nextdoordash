import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: $breakpointTablet) {
    align-items: flex-start;
  }
}
`;

export const Modal = styled.div`
  width: 560px;
  max-width: 100vw;
  height: calc(100vh - 120px);
  padding: 16px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 9px;
  background-color: white;
  overflow: hidden;

  @media (max-width: $breakpointTablet) {
    width: 100vw;
    height: 100vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;
`;

export const TextArea = styled.div`
  flex-shrink: 0;
  .title {
    font-size: 32px;
    font-family: TTNorms-Bold;
    color: $primaryText;
    margin-bottom: 8px;
  }
  .description {
    color: $secondaryText;
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-family: TTNorms-Bold;
  color: $primaryText;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  color: $secondaryText;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;
  margin-bottom: 8px;
`;

export const OptionsArea = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 8px;
`;

export const CloseButton = styled.button`
  flex-shrink: 0;
  color: white;
  background-color: rgb(235, 23, 0);
  font-size: 14px;
  font-family: TTNorms-Bold;
  line-height: 24px;
  border-radius: 1000px;
  padding: 4px 12px;
  outline: none;
  box-sizing: content-box;
  border: 4px solid transparent;
  min-width: 200px;
  max-width: 30vw;

  @media (max-width: $breakpointTablet) {
    margin-bottom: 40px;
  }

  &:focus {
    border: 4px solid rgba(0, 0, 255, 0.4);
  }
`;
