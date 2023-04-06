import React from "react";
import { Outlet } from "react-router-dom";
// import { NavBar } from "../NavBar";
import NavigationMenubar from "./NavigationMenubar";

const Layout = ({isHideNavbar, ...props }) => {
  console.log('isHideNavbar', {isHideNavbar, ...props})
  return (
    <div {...props}>
      {!isHideNavbar ? <NavigationMenubar />: null}
      <Outlet />  
    </div>
  );
};

export default Layout;
