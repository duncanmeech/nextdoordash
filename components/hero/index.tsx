import React, { Fragment } from "react";
import { getCannonicalURI } from "../utils/image";
import {
  HeroHeight,
  LogoSize,
  HeroContainer,
  ImageContainer,
  ImageWrapper,
  Image,
  Triangle,
  LogoContainer,
  LogoInner,
  LogoImage,
  Name,
} from "./hero-styles";

const optimalHeroImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=${HeroHeight},format=auto,quality=50/${source}`;
};

const optimalLogoImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,height=${LogoSize},format=auto,quality=72/${source}`;
};

type Props = {
  storeName: string;
  storeImage?: string;
  logoImage?: string;
};

export default function Hero({ storeName, storeImage, logoImage }: Props) {
  return (
    <HeroContainer>
      {storeImage && (
        <ImageContainer>
          <ImageWrapper>
            <Image
              src={optimalHeroImageUrl(storeImage)}
              alt={storeName}
              loading="eager"
            />
          </ImageWrapper>
          {logoImage && (
            <Fragment>
              <Triangle />
              <LogoContainer>
                <LogoInner />
                <LogoImage
                  src={optimalLogoImageUrl(logoImage)}
                  alt={storeName}
                />
              </LogoContainer>
            </Fragment>
          )}
        </ImageContainer>
      )}
      <Name>{storeName}</Name>
    </HeroContainer>
  );
}
