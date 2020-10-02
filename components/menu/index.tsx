import React from "react";
import MenuCard from "./menu-card";
import { MenuSection, MenuName, Grid } from "./menu-styles";

type Props = {
  menu: any;
  onOpenItemModal: (any) => void;
};

export default class Menu extends React.PureComponent<Props> {
  render() {
    const { menu, onOpenItemModal } = this.props;
    const { name: menuName, id, items } = menu;

    return (
      <MenuSection key={id}>
        <MenuName>{menuName}</MenuName>
        <Grid>
          {items.map((item) => {
            const { id } = item;
            return (
              <MenuCard
                item={item}
                key={id}
                cardClicked={() => onOpenItemModal(item)}
              />
            );
          })}
        </Grid>
      </MenuSection>
    );
  }
}
