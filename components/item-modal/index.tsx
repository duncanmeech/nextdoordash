import React from "react";
import Button from "@doordash/component-button";
import LayerManager from "@doordash/component-layer-manager";
import { Modal } from "@doordash/component-modal";

import { getCannonicalURI } from "../utils/image";
import KeyValue from "../utils/keyvalue";
import { TextArea, Description, Image, OptionsArea } from "./item-modal-styles";

const optimalImageUrl = (imageUrl) => {
  const source = getCannonicalURI(imageUrl);
  return `https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto/${source}`;
};

type Props = {
  menuItem: any;
  closed: () => void;
};

export default class ItemModal extends React.PureComponent<Props> {
  render() {
    const { menuItem, closed } = this.props;
    const { imageUrl, name, description } = menuItem;
    const metrics = KeyValue.get("metrics", {});

    return (
      <LayerManager>
        <Modal title={name} hasCloseButton={true}>
          <TextArea>
            <Description>{description}</Description>
          </TextArea>
          {imageUrl && <Image src={optimalImageUrl(imageUrl)} />}
          <OptionsArea>
            <ul>
              {Object.keys(metrics).map((key) => {
                return <li key={key}>{`${key} - ${metrics[key]}`}</li>;
              })}
            </ul>
          </OptionsArea>
          <Button type={Button.Types.PrimaryPill} onClick={closed}>
            Close
          </Button>
        </Modal>
      </LayerManager>
    );
  }
}
