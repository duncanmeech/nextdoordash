import React from "react";
import styles from "./menu.module.scss";
import MenuCard from "./menu-card";

type Props = {
  menu: any;
  onOpenItemModal: (any) => void;
};

export default class Menu extends React.PureComponent<Props> {
  render() {
    const { menu, onOpenItemModal } = this.props;
    const { name: menuName, id, items } = menu;

    return (
      <div key={id} className={styles.menu}>
        <div className={styles.menuname}>{menuName}</div>
        <div className={styles.grid}>
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
        </div>
      </div>
    );
  }
}
