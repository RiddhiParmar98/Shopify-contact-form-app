import React from "react";
import { Button, ButtonGroup, Icon, Link } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "./CreateForm.module.css";

const Topbar = ({ handleRedirectToForm }) => {

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.sideBar}>
          <div className={styles.logo}>
            <Link url="/form" onClick={handleRedirectToForm}>
              <Icon source={ChevronLeftMinor} className={styles.leftIcon} />
            </Link>
          </div>
          <div className={styles.backTitle}>
            <Link url="/form" onClick={handleRedirectToForm}>
              <span>Back to List</span>
            </Link>
          </div>
        </div>
        <div className={styles.rightContext}>
          <div className={styles.innerContext}>
            <div className={styles.itemAction}>
              <ButtonGroup>
                <Button onClick={handleRedirectToForm}>Cancel</Button>
                <Button primary>Save</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
