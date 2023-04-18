import React, { useEffect } from "react";
import { Button, ButtonGroup, Icon, Link } from "@shopify/polaris";
import { useDispatch, useSelector } from "react-redux";
import { getFormData, postFormData } from "../../../redux/actions/allActions";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useNavigate } from "react-router-dom";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "../FormStyle.module.css";

const Topbar = ({ handleRedirectToForm }) => {
  const dispatch = useDispatch();
  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);

  const combinedArray = useSelector((state) => state.combinedObjects);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getFormData());
  }, [dispatch]);

  const handleSubmit = () => {
    // dispatch(postFormData(combinedArray));
    dispatch(postFormData(combinedArray));
    fullscreen.dispatch(Fullscreen.Action.EXIT);
    navigate("/form", { replace: true });
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
