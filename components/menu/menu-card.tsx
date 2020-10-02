import React, { Fragment } from "react";
import { getCannonicalURI } from "../utils/image";
import { InView } from "react-intersection-observer";
import {
  Box,
  BoxLeft,
  ItemName,
  ItemDescription,
  ItemPrice,
  ImageContainer,
  Image,
  IMAGE_SIZE,
} from "./menu-styles";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=${IMAGE_SIZE},height=${IMAGE_SIZE},format=auto,quality=50/${source}`;
};

type Props = {
  item: any;
  cardClicked: () => void;
};

export default class MenuCard extends React.PureComponent<Props> {
  render() {
    const { item, cardClicked } = this.props;
    const { name, description, displayPrice, imageUrl } = item;

    return (
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Box ref={ref} onClick={cardClicked}>
            {inView && (
              <Fragment>
                <BoxLeft>
                  <ItemName>{name}</ItemName>
                  <ItemDescription>{description}</ItemDescription>
                  <ItemPrice>{displayPrice}</ItemPrice>
                </BoxLeft>
                {imageUrl && (
                  <ImageContainer>
                    <Image src={optimalImageUrl(imageUrl)} />
                  </ImageContainer>
                )}
              </Fragment>
            )}
          </Box>
        )}
      </InView>
    );
  }
}
