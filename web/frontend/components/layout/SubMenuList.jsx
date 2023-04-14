import { Icon } from "@shopify/polaris";
import React from "react";
import { Link } from "react-router-dom";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import styles from "./NavigationMenubar.module.css";

const SubMenuList = ({ submenus, isOpenMenu }) => {
  const app = useAppBridge();
  return (
    <ul
      className={`${styles.subMenu} ${`dropdown ${
        isOpenMenu ? styles.show : ""
      }`}`}
    >
      {submenus.map(({ id, content, path, icon }) => (
        <li key={id} className={styles.subMenuItems}>
          {id === "faq" ? (
            <Link
              to="https://www.itpathsolutions.com/"
              target="_blank"
              onClick={() =>
                app.dispatch(
                  Redirect.create(app, "https://www.itpathsolutions.com/")
                )
              }
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
          ) : (
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
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubMenuList;
