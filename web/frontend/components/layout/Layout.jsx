import React from "react";
import { Outlet } from "react-router-dom";
import NavigationMenubar from "./NavigationMenubar";

const Layout = ({isHideNavbar, ...props }) => {
  return (
    <div {...props}>
      {!isHideNavbar ? <NavigationMenubar />: null}
      <Outlet />  
    </div>
  );
};

export default Layout;
