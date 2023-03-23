import { Icon } from "@shopify/polaris";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationMenubar.module.css";

const SubMenuList = ({ submenus, isOpenMenu }) => {
    
  return (
    <ul
      className={`${styles.subMenu} ${`dropdown ${
        isOpenMenu ? styles.show : ""
      }`}`}
    >
      {submenus.map(({ id, content, path, icon }) => (
        <li key={id} className={styles.subMenuItems}>
          <Link
            to={path}
            className={`${styles.menuLink} ${
              location.pathname?.includes(path) ? styles.active : ""
            }`}
          >
            <Icon
              source={icon}
              className={`${
                location.pathname?.includes(path) ? styles.active : ""
              }`}
            />
            <span className={styles.navTitle}>{content}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenuList;
