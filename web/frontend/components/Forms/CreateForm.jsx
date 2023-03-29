import React, { useCallback, useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Fullscreen } from "@shopify/app-bridge/actions";
import styles from "./CreateForm.module.css";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { Button, ButtonGroup, Icon, Link, Tabs } from "@shopify/polaris";
import { AddMajor, FooterMajor } from "@shopify/polaris-icons";
import { formInputFields, headerData } from "../../../collection/Constant";
import CustomFormFields from "./CustomFormFields";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const [selected, setSelected] = useState(0);
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const navigate = useNavigate();
  
  const tabs = [
    {
      id: "elements",
      content: "Elements",
      accessibilityLabel: "All customers",
      panelID: "elements-fitted-content",
    },
    {
      id: "settings",
      content: "Settings",
      panelID: "settings-fitted-content",
    },
    {
      id: "publish",
      content: "Publish",
      panelID: "publish-fitted-content",
    },
  ];
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const handleSubmenu = () => {
    setIsOpenSubmenu(!isOpenSubmenu);
  };
  useEffect(() => {
    fullscreen.dispatch(Fullscreen.Action.ENTER);
   }, [])

  const handleRedirectToForm = () => {
    fullscreen.dispatch(Fullscreen.Action.EXIT);
    navigate("/form", { replace: true });
  };
  console.log("isOpenSubmenu", isOpenSubmenu);
  return (
    <>
      <div>
        <div>
          {!isOpenSubmenu ? (
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
                    tabs={tabs}
                    selected={selected}
                    onSelect={handleTabChange}
                    fitted
                  >
                    <div className={styles.tabContent}>
                      {headerData?.map((data)=> (
                      <div className={styles.rootContent} key={data?.id}>
                        <div className={styles.contentWrapper}>
                          <div className={styles.listItem}>
                            <div className={styles.row} onClick={handleSubmenu}>
                              <div className={styles.elementIcon}>
                                <Icon source={data?.icon} />
                              </div>
                              <div className={styles.elementTitle}>
                                <div>
                                  <h3>{data?.title}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
                      {formInputFields?.map((data, index) => (
                        <div className={styles.rootContent} key={index}>
                          <div className={styles.contentWrapper}>
                            <div>
                              <h3 className={styles.subHeading}>
                                {data?.heading}
                              </h3>
                            </div>
                            <div>
                              <div>
                                {data?.elementData?.map((element) => (
                                  <div
                                    className={styles.contentWrapper}
                                    key={element?.id}
                                  >
                                    <div className={styles.listItem}>
                                      <div className={styles.row} onClick={handleSubmenu}>
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
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className={styles.rootContent}>
                        <div className={styles.contentWrapper}>
                          <div className={styles.listItem}>
                            <div className={styles.row} onClick={handleSubmenu}>
                              <div className={styles.elementIcon}>
                                <Icon source={AddMajor} />
                              </div>
                              <div className={styles.elementTitle}>
                                <div>
                                  <h3>Add Element</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.rootContent}>
                        <div className={styles.contentWrapper}>
                          <div className={styles.listItem}>
                            <div className={styles.row} onClick={handleSubmenu}>
                              <div className={styles.elementIcon}>
                                <Icon source={FooterMajor} />
                              </div>
                              <div className={styles.elementTitle}>
                                <div>
                                  <h3>Footer</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </>
          ) : (
            <CustomFormFields handleSubmenu={handleSubmenu} handleRedirectToForm={handleRedirectToForm}/>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateForm;