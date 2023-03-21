// import { Tabs } from "@shopify/polaris";
// import { useState, useCallback } from "react";
// import routes from "../pages";

// export function NavBar() {
//   const [selected, setSelected] = useState(0);

//   const handleTabChange = useCallback(
//     (selectedTabIndex) => setSelected(selectedTabIndex),
//     []
//   );

//   // const tabs = [
//   //   {
//   //     id: "dashboard",
//   //     content: "Dashboard",
//   //     // accessibilityLabel: "Dashboard",
//   //   },
//   //   {
//   //     id: "forms",
//   //     content: "Forms",
//   //   },
//   //   {
//   //     id: "submissions",
//   //     content: "Submissions",
//   //   },
//   //   {
//   //     id: "settings",
//   //     content: "Settings",
//   //   },
//   //   {
//   //     id: "plan and pricing",
//   //     content: "Plan & Pricing",
//   //   },
//   //   {
//   //     id: "support",
//   //     content: "Support",
//   //   },
//   // ];

//   // const handleTab = (key) => {
//   //   switch (key) {
//   //     case 0:
//   //       return <Dashboard />;
//   //     case 1:
//   //       return <Forms />;
//   //     case 2:
//   //       return <Submissions />;
//   //     case 3:
//   //       return <Settings />;
//   //     case 4:
//   //       return <Pricingplans />;
//   //     case 5:
//   //       return <ContactUsForm />;
//   //     default:
//   //       return <Dashboard />;
//   //   }
//   // };

//   return (
//     <>
//       <Tabs
//         tabs={[...routes]}
//         selected={selected}
//         onSelect={handleTabChange}
        
//       ></Tabs>
//       {/* {handleTab(selected)} */}
//       {/* <Card.Section title={tabs[selected].content}>
    
//         </Card.Section> */}
//       {/* </Tabs> */}
//     </>
//   );
// }
