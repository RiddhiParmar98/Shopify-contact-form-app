import React from "react";
import Drawer from "react-modern-drawer";
import FormTabsProvider from "../FormTabsProvider/FormTabsProvider";
import "./drawer.css";
// import CommonFields from "../CommonFields";

const FormDrawer = ({ isOpen, toggleDrawer, tabId }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={() => toggleDrawer(tabId)}
      direction="right"
      enableOverlay={false}
    >
      {/* <CommonFields/> */}
      <FormTabsProvider {...{ tabId, toggleDrawer }} />
      {/* <button onClick={toggleDrawer}>Close</button> */}
    </Drawer>
  );
};

export default FormDrawer;
