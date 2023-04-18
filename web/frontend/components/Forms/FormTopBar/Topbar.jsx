import React, { useEffect } from "react";
import { Button, ButtonGroup, Icon, Link } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "../FormStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFormData,
  postFormData,
} from "../../../redux/reducers/inputFieldSlice";

const Topbar = ({ handleRedirectToForm }) => {
  const dispatch = useDispatch();
  const combinedArray = useSelector((state) => state.combinedObjects);
  const formData = useSelector((state) => state.formData);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(getFormData());
  }, [dispatch]);

  const handleSubmit = () => {
    // dispatch(postFormData(combinedArray));
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
                {combinedArray.length > 0 && (
                  <Button primary onClick={handleSubmit}>
                    Save
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
