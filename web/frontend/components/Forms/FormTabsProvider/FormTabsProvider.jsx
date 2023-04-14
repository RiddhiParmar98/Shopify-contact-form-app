import FormFields from "../FormFields";
import AddElementList from "./Providers/AddElementList";
import FooterFields from "./Providers/FooterFields";
import HeaderFields from "./Providers/HeaderFields";

const FormTabsProvider = ({ tabId, toggleDrawer }) => {
  switch (tabId?.id) {
    case "header_tab":
      return <HeaderFields {...{ tabId, toggleDrawer }} />;
    case "add_element":
      return <AddElementList {...{ tabId, toggleDrawer }} />;
    case "footer_tab":
      return <FooterFields {...{ tabId, toggleDrawer }} />;
    case "text":
    case "email":
    case "message":
    case "name":
    case "phone":
    case "password":
    case "number":
    case "textarea":
      return <FormFields {...{ tabId, toggleDrawer }} />;
    default:
      return null;
  }
};

export default FormTabsProvider;
