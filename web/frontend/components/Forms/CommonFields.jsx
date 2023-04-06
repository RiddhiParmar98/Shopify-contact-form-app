import React, { useState } from "react";
import { FormProvider } from "./FormProvider";
import { Button, ButtonGroup, Icon } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "./CreateForm.module.css";

const CommonFields = ({tabId, toggleDrawer}) => {
  const [commonFormInputs, setCommonFormInputs] = useState({
    label: "",
    placeholder: "",
    description: "",
    required: "",
  });

  const handleChange = (name, value) => {
    setCommonFormInputs({ ...commonFormInputs, [name]: value });
  };
  const commonInputFields = [
    {
      id: "common_label_element",
      label: "Label",
      type: "text",
      name: "label",
      // value: footerFields.label,
      onChange: handleChange,
    },
    {
      id: "common_placeholder_element",
      label: "Placeholder",
      type: "text",
      name: "placeholder",
      onChange: handleChange,
    },
    {
      id: "common_description_element",
      label: "Description",
      type: "text",
      name: "description",
      onChange: handleChange,
    },
    {
      id: "common_required_element",
      label: "Required",
      type: "checkbox",
      name: "required",
      onChange: handleChange,
    },
  ];

  return (
    <div>
      <div className={`${styles.nested} ${styles.toggle}`}>
        <div className={styles.nestedHeader}>
          <div className={styles.backIcon} onClick={toggleDrawer}>
            <Icon source={ChevronLeftMinor} />
          </div>
          <div className={styles.nestedTitle}></div>
        </div>
        <div className={styles.nestedContent}>
          <div>
            <div>
              <div className={styles.formFields}>
                <div className={styles.textWrapper}>
                  {commonInputFields?.map(({ id, type, ...otherData }) => (
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
  );
};
export default CommonFields;
