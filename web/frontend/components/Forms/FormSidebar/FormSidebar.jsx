import React, { useCallback, useState } from "react";
import { Tabs } from "@shopify/polaris";
import { tabs } from "../../../constant";
import TabsProvider from "../TabsProvider/TabsProvider";
import styles from "../CreateForm.module.css";

const FormSidebar = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  return (
    <div className={styles.leftContext}>
      <div>
        <Tabs
          {...{
            tabs,
            selected,
            fitted: true,
            onSelect: handleTabChange,
          }}
        >
          <div className={styles.tabContent}>
            <TabsProvider
              {...{ currentTab: ["elements", "settings", "publish"][selected] }}
            />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FormSidebar;
