import { Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";

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

  return (
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {/* <Card.Section title={tabs[selected].content}>
    
        </Card.Section> */}
      </Tabs>
  );
}
