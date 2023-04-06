import React, { useState } from "react";
import { Icon } from "@shopify/polaris";
import { ChevronLeftMinor, TextMajor } from "@shopify/polaris-icons";
import { useSelector,useDispatch } from "react-redux";
import styles from "../CreateForm.module.css";

const HeaderTab = ({ tabId, toggleDrawer }) => {
  const formData = useSelector((state) => state.input_fields);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={`${styles.nested} ${styles.toggle}`}>
        <div className={styles.nestedHeader}>
          <div className={styles.backIcon} onClick={() => toggleDrawer(tabId)}>
            <Icon source={ChevronLeftMinor} />
          </div>
          <div className={styles.nestedTitle}>{tabId?.label}</div>
        </div>
        <div className={styles.nestedContent}>
          <div>
            <div>
              <div className={styles.contentWrapper}>
                <div>
                  <h3 className={styles.subHeading}>Inputs</h3>
                  <div>
                    <div className={styles.contentWrapper}>
                      <div className={styles.listItem}>
                        <div
                          className={styles.row}
                          onClick={() => dispatch(addElement(data))}
                        >
                          <div className={styles.elementIcon}>
                            <Icon source={TextMajor} />
                          </div>
                          <div className={styles.elementTitle}>
                            <div>
                              <h3>Text</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTab;
