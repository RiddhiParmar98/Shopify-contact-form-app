import React, { useCallback, useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { Button, ButtonGroup, Icon, Link, Tabs } from "@shopify/polaris";
import { tabs } from "../../constant";
import { useNavigate } from "react-router-dom";
import { HeaderMajor, AddMajor, FooterMajor } from "@shopify/polaris-icons";
import CustomFormFields from "./CustomFormFields";
import FooterProvider from "./FooterProvider";
import AddElementForm from "./AddElementForm";
import { useSelector } from "react-redux";
import styles from "./CreateForm.module.css";

const CreateForm = () => {
  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const [selected, setSelected] = useState(0);
  // const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const navigate = useNavigate();
  const [drawerKey, setDrawerKey] = useState(false);
  const formData = useSelector((state) => state.elementData);
  console.log("formData: ", formData);

  const formInputFields = [
    {
      // heading: "",
      fieldData: [{ id: "header", title: "Header", icon: HeaderMajor }],
    },
    // {
    //   heading: "Elements",
    //   fieldData: [
    //     { id: "text", title: "Text", icon: TextMajor },
    //     { id: "email", title: "Email", icon: EmailMajor },
    //   ],
    // },
    {
      fieldData: [{ id: "add_element", title: "Add Element", icon: AddMajor }],
    },
    {
      fieldData: [{ id: "footer", title: "Footer", icon: FooterMajor }],
    },
  ];

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const subMenuProvider = (id, heading) => {
    switch (id) {
      case "header":
        return <CustomFormFields heading={heading} />;
      case "footer":
        return <FooterProvider heading={heading} />;
      case "add_element":
        return <AddElementForm heading={heading} />;
      default:
        return <CreateForm />;
    }
  };

  const handleSubmenu = (id, heading) => {
    const showComponent = subMenuProvider(id, heading);
    setDrawerKey(showComponent);
  };

  useEffect(() => {
    fullscreen.dispatch(Fullscreen.Action.ENTER);
  }, []);

  const handleRedirectToForm = () => {
    fullscreen.dispatch(Fullscreen.Action.EXIT);
    navigate("/form", { replace: true });
  };

  return (
    <>
      <div>
        <div>
          <>
            <div className={styles.topBar}>
              <div className={styles.sideBar}>
                <div className={styles.logo}>
                  <Link url="/form" onClick={handleRedirectToForm}>
                    <Icon
                      source={ChevronLeftMinor}
                      className={styles.leftIcon}
                    />
                  </Link>
                </div>
                <div className={styles.backTitle}>
                  <Link url="/form" onClick={handleRedirectToForm}>
                    <span>Back to List</span>
                  </Link>
                </div>
              </div>
              <div className={styles.rightContext}>
                <div className={styles.innerContext}>
                  <div className={styles.itemAction}>
                    <ButtonGroup>
                      <Button onClick={handleRedirectToForm}>Cancel</Button>
                      <Button primary>Save</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.leftContext}>
              <div>
                <Tabs
                  {...{
                    tabs,
                    selected,
                    fitted: true,
                    onSelect: handleTabChange,
                  }}
                >
                  <div className={styles.tabContent}>
                    {formInputFields?.map(({ fieldData }, index) => (
                      <div className={styles.rootContent} key={index}>
                        <div className={styles.contentWrapper}>
                          {/* {heading && (
                            <h3 className={styles.subHeading}>{heading}</h3>
                          )} */}
                          <div>
                            <div>
                              {/* {formData &&
                                formData?.map((element) =>
                                <div className={styles.contentWrapper} key={element?.id}>
                                <div className={styles.listItem}>
                                  <div className={styles.row} >
                                    <div className={styles.elementIcon}>
                                      <Icon source={element?.icon} />
                                    </div>
                                    <div className={styles.elementTitle}>
                                      <div>
                                        <h3>{element?.title}</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                                )} */}
                                {fieldData?.map(({ id, title, icon }) => (
                                  <div className={styles.contentWrapper} key={id}>
                                    <div className={styles.listItem}>
                                      <div
                                        className={styles.row}
                                        onClick={()=>handleSubmenu(id,title)}
                                      >   
                                        <div className={styles.elementIcon}>
                                          <Icon source={icon} />
                                        </div>
                                        <div className={styles.elementTitle}>
                                          <div>
                                            <h3>{title}</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                            </div>
                          </div>
                          {drawerKey}
                        </div>
                      </div>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>
          </>
          {/* ) : ( */}
          {/* <CustomFormFields
            handleSubmenu={handleSubmenu}
            handleRedirectToForm={handleRedirectToForm}
          /> */}
          {/* )} */}
        </div>
      </div>
    </>
  );
};
export default CreateForm;