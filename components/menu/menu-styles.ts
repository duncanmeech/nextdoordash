import styled from "styled-components";
import DLS from "../../styles/doordash-styles";

export const IMAGE_SIZE = 125;

export const MenuSection = styled.div`
  width: 100%;
  margin-top: 40px;
}
`;

export const MenuName = styled.div`
  color: ${DLS.Black};
  font-size: 24px;
  margin-bottom: 8px;
  font-family: TTNorms-Bold;
}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 8px));
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media (max-width: ${DLS.BreakpointTablet}px) {
      grid-template-columns: 1fr;
  }
}`;

export const Box = styled.div`
  width: 100%;
  height: ${IMAGE_SIZE}px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  cursor: pointer;
}`;

export const BoxLeft = styled.div`
  width: 100%;
  // css hack to make text-overflow: ellipsis work on text items
  min-width: 0;
  height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}`;

export const ItemName = styled.span`
  font-size: 16px;
  font-family: TTNorms-Bold;
  color: ${DLS.Black};
  margin-bottom: 8px;

  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  width: 100%;
  min-width: 0;
}`;

export const ItemDescription = styled.span`
  font-size: 14px;
  font-family: TTNorms;
  color: ${DLS.DarkGray};
  margin-bottom: 8px;
  line-height: 20px;
  letter-spacing: 0ch;
  text-transform: none;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 40px;
  white-space: normal;
}`;

export const ItemPrice = styled.span`
  font-size: 14px;
  color: ${DLS.DarkGray};
}`;

export const ImageContainer = styled.div`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  flex-shrink: 0;
}`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
}`;
