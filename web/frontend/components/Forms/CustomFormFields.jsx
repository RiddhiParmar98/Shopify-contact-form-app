import { Button, ButtonGroup, Icon, Link } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import styles from "./CreateForm.module.css";

const CustomFormFields = ({ tabId, toggleDrawer }) => {
  // const [checked, setChecked] = useState(false);
  const [formFields, setFormFields] = useState({ title: "", description: "" });

  // const handleCheckedValue = useCallback((newChecked) => setChecked(newChecked), []);

  const handleChange = (name, value) => {
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmenu = () => {};

  const customHeaderFields = [
    {
      id: "header_title_element",
      label: "Title",
      type: "text",
      name: "title",
      value: formFields.title,
      onChange: handleChange,
    },
    {
      id: "header_desc_element",
      label: "Description",
      type: "text",
      name: "description",
      value: formFields.description,
      onChange: handleChange,
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
                      <FormProvider key={id} {...{ type, ...otherData }} />
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
export default CustomFormFields;
