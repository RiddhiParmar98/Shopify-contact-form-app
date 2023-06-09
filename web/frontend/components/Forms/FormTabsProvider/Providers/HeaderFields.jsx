import { Button, ButtonGroup, Icon } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { InputTypeProvider } from "./InputTypeProvider";
import styles from "../../FormStyle.module.css";

const HeaderFields = ({ tabId, toggleDrawer }) => {
  const [headerData, setHeaderData] = useState({ title: "", description: "", email:"" });

  const handleChange = (name, value) => {
    setHeaderData({ ...headerData, [name]: value });
  };

  const customHeaderFields = [
    {
      id: "header_title_element",
      label: "Title",
      type: "text",
      name: "title",
      value: headerData.title,
      handleChange,
    },
    {
      id: "header_desc_element", 
      label: "Description",
      type: "text",
      name: "description",
      value: headerData.description,
      handleChange,
    },
  ];

  return (
    <>
      <div>
        <div className={`${styles.nested} ${styles.toggle}`}>
          <div className={styles.nestedHeader}>
            <div className={styles.backIcon} onClick={toggleDrawer}>
              <Icon source={ChevronLeftMinor} />
            </div>  
            <div className={styles.nestedTitle}>{tabId?.label}</div>
          </div>
          <div className={styles.nestedContent}>
            <div>
              <div>
                <div className={styles.formFields}>
                  <div className={styles.textWrapper}>
                    {customHeaderFields?.map(({ id, type, ...otherData }) => (
                      <InputTypeProvider key={id} {...{ type, ...otherData }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.itemAction}>
                <ButtonGroup>
                  <Button primary>Save</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderFields;
