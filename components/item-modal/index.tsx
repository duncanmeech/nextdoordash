import React from "react";
import ReactDOM from "react-dom";
import { getCannonicalURI } from "../utils/image";
import KeyValue from "../utils/keyvalue";
import {
  ModalOverlay,
  Modal,
  TextArea,
  Title,
  Description,
  Image,
  OptionsArea,
  CloseButton,
} from "./item-modal-styles";

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

    return ReactDOM.createPortal(
      <ModalOverlay>
        <Modal>
          <TextArea>
            <Title>{name}</Title>
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
          <CloseButton onClick={closed}>Close</CloseButton>
        </Modal>
      </ModalOverlay>,
      document.body
    );
  }
}
