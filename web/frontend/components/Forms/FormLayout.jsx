import React, { useCallback, useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useNavigate } from "react-router-dom";
import Topbar from "./FormTopBar/Topbar";
import FormSidebar from "./FormSidebar/FormSidebar";

const FormLayout = () => {
  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  // const subMenuProvider = (id, heading) => {
  //   switch (id) {
  //     case "header":
  //       return <CustomFormFields heading={heading} />;
  //     case "footer":
  //       return <FooterProvider heading={heading} />;
  //     case "add_element":
  //       return <AddElementForm heading={heading} />;
  //     default:
  //       return <CreateForm />;
  //   }
  // };

  // const handleSubmenu = (id, heading) => {
  //   const showComponent = subMenuProvider(id, heading);
  //   setDrawerKey(showComponent);
  // };

  useEffect(() => {
    fullscreen.dispatch(Fullscreen.Action.ENTER);
  }, []);

  const handleRedirectToForm = () => {
    fullscreen.dispatch(Fullscreen.Action.EXIT);
    navigate("/form", { replace: true });
  };

  return (
      <div>
        <Topbar handleRedirectToForm={handleRedirectToForm} />
        <FormSidebar/>
      </div>
  );
};
export default FormLayout;
