import styled from "styled-components";
import DLS from "../../styles/doordash-styles";

export const HeroHeight = 250;
export const LogoSize = 76;

const HeroContainerHeight = 300;
const TriangleHeight = 30;
const TriangleWidth = DLS.BreakpointMobile;

export const HeroContainer = styled.div`
  width: 100%;
  color: ${DLS.Black};
  margin-top: 20px;
}
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: ${HeroContainerHeight}px;
  position: relative;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 11px;
  overflow: hidden;
  width: 100%;
  height: ${HeroHeight}px;
}`;

export const Image = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: ${HeroHeight}px;
  object-fit: cover;
  object-position: left;
}`;

export const Triangle = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(${HeroHeight}px - ${TriangleHeight}px);
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${TriangleHeight}px 0 0 ${TriangleWidth}px;
  border-color: transparent transparent transparent #ffffff;
  /* for better aliasing, force a 3d render */
  transform: rotate(360deg);
}`;

export const LogoContainer = styled.div`
  z-index: 2;
  width: ${LogoSize + 4}px;
  height: ${LogoSize + 4}px;
  position: absolute;
  bottom: 12px;
  left: 16px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
}`;

export const LogoInner = styled.div`
  height: ${LogoSize}px;
  position: relative;
}`;

export const LogoImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`;

export const Name = styled.div`
  font-size: 40px;
  font-family: TTNorms-Bold;
}`;
