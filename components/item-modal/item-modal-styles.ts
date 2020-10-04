import styled from "styled-components";

export const TextArea = styled.div`
  flex-shrink: 0;
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
