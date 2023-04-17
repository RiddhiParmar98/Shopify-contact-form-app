import React from "react";
import { Button, ButtonGroup, Icon, Link } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "../FormStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../../../redux/actions/inputFieldAction";

const Topbar = ({ handleRedirectToForm }) => {
  const combinedArray = useSelector((state) => state.combinedObjects);
 
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(postFormData(combinedArray));
  };

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
                <Button primary onClick={handleSubmit}>
                  Save
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
