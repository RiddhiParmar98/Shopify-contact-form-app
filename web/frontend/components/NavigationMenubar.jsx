import { Link, useNavigate } from "react-router-dom";
import routes from "../pages";
import { Icon } from "@shopify/polaris";
import styles from "./NavigationMenubar.module.css"

function NavigationMenubar() {
  
const navigate = useNavigate();
  return (
    <nav className={styles.nav}> 
    <div className={styles.contentNav}>
      <ul className={styles.navigation}>
        {routes?.map((route) => (
          <li key={route?.id} className={styles.menuItems}>
            <Link to={route?.path} onClick={()=>navigate(route?.path)} className={styles.menuLink}>
            <Icon source={route?.icon} className={styles.navIcons} color="base" />
              <span className={styles.navTitle}>{route?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}
export default NavigationMenubar;