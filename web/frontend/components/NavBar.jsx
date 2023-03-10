import { Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import UserForm  from "./UserForm";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

export function NavBar() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "dashboard",
      content: "Dashboard",
      accessibilityLabel: "Dashboard",
    },
    {
      id: "forms",
      content: "Forms",
    },
    {
      id: "submissions",
      content: "Submissions",
    },
    {
      id: "customers",
      content: "Customers",
    },
    {
      id: "settings",
      content: "Settings",
    },
    {
      id: "plan and pricing",
      content: "Plan & Pricing",
    },
    {
      id: "support",
      content: "Support",
    },
  ];

  const handleTab = (key) => {
    switch (key) {
      case 0:
        return <Dashboard />;
      case 1:
        return <UserForm />;
      case 4:
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <Tabs
        tabs={tabs}
        selected={selected}
        onSelect={handleTabChange}
        children
      />
      {handleTab(selected)}
      {/* <Card.Section title={tabs[selected].content}>
    
        </Card.Section> */}
      {/* </Tabs> */}
    </>
  );
}
