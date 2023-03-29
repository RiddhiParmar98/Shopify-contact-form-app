import { Link } from "react-router-dom";
import { Tabs } from "../../pages";
import { Icon } from "@shopify/polaris";
import styles from "./NavigationMenubar.module.css";
import SubMenuList from "./SubMenuList";
import { useState } from "react";
import { DropdownMinor } from "@shopify/polaris-icons";

function NavigationMenubar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeDropdown = () => {
    isOpenMenu && setIsOpenMenu(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.contentNav}>
        <ul className={styles.navigation}>
          {Tabs?.map(({ id, icon, content, path, children }) => (
            <li key={id} className={styles.menuItems} onClick={closeDropdown}>
              <Link
                to={path}
                className={`${styles.menuLink} ${
                  location?.pathname?.includes(path) ? styles.active : ""
                }`}
                onClick={() => {children && setIsOpenMenu((prev) => !prev)}}
              >
                <Icon
                  source={icon}
                  className={`${styles.navIcons} ${
                    location.pathname?.includes(path) ? styles.active : ""
                  }`}
                />
                <span className={styles.navTitle}>{content}</span>
              </Link>
              {children && (
                <>
                  <SubMenuList submenus={children} isOpenMenu={isOpenMenu} />
                  <Icon source={DropdownMinor} color="base" />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default NavigationMenubar;
