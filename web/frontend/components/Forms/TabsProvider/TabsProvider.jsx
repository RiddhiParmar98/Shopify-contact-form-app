import React from "react";
import ElementsProvider from "./Providers/ElementsProvider";
import SettingsProvider from "./Providers/SettingsProvider";
import PublishProvider from "./Providers/PublishProvider";

const TabsProvider = ({ currentTab }) => {
  switch (currentTab) {
    case "elements":
      return <ElementsProvider />;
    case "settings":
      return <SettingsProvider />;
    case "publish":
      return <PublishProvider />;
    default:
      <ElementsProvider />;
  }
};

export default TabsProvider;
