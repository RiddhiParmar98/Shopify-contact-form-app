import React from "react";
import Drawer from "react-modern-drawer";
import "./drawer.css";
import Tab from "../FormTabs/Tab";


const FormDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      enableOverlay={false}
    >
      {/* <button onClick={toggleDrawer}>Close</button> */}
    <Tab toggleDrawer={toggleDrawer}/>
    </Drawer>
  );
};

export default FormDrawer;
