import React from "react";
import { Outlet } from "react-router-dom";
// import { NavBar } from "../NavBar";
import NavigationMenubar from "../NavigationMenubar";

const Layout = ({ ...props }) => {
  return (
    <div {...props}>
      <NavigationMenubar />
      <Outlet />  
    </div>
  );
};

export default Layout;
