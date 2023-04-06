import React from "react";
import AddElementForm from "../AddElementForm";
import FooterProvider from "../FooterProvider";
import CustomFormFields from "../CustomFormFields";
import CommonFields from "../CommonFields";

const FormTabsProvider = ({ tabId, toggleDrawer }) => {
  switch (tabId?.id) {
    case "header_tab":
      return <CustomFormFields {...{ tabId, toggleDrawer }} />;
    case "add_element":
      return <AddElementForm {...{ tabId, toggleDrawer }} />;
    case "footer_tab":
      return <FooterProvider {...{ tabId, toggleDrawer }} />;
    case "text":
      return <CommonFields {...{ tabId, toggleDrawer }} />;
    default:
      return null;
  }
};

export default FormTabsProvider;
