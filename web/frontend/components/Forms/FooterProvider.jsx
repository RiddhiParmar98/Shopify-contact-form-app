import { Button, ButtonGroup, Icon } from "@shopify/polaris";
import styles from "./CreateForm.module.css";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import { FormProvider } from "./FormProvider";

const FooterProvider = ({ heading }) => {
  console.log('heading: ', heading);
  // const [checked, setChecked] = useState(false);
  const [footerFields, setFooterFields] = useState({
    title: "",
    description: "",
    resetButton: "",
  });

  // const handleCheckedValue = useCallback((newChecked) => setChecked(newChecked), []);

  const handleChange = (name, value) => {
    console.log('name, value: ', name, value);
    setFooterFields({ ...footerFields, [name]: value });
  };

  const customHeaderFields = [
    {
      id: "footer_tilte_element",
      label: "Text",
      type: "text",
      name: "title",
      value: footerFields.title,
      onChange: handleChange,
    },
    {
      id: "footer_desc_element",
      label: "Description",
      type: "text",
      name: "description",
      value: footerFields.description,
      onChange: handleChange,
    },
    {
      id: "footer_reset_element",
      label: "Reset button",
      type: "checkbox",
      name: "resetButton",
      value: footerFields.resetButton,
      onChange: handleChange,
    },
  ];

  return (
    <>
          <div>
            <div className={`${styles.nested} ${styles.toggle}`}>
              <div className={styles.nestedHeader}>
                <div className={styles.backIcon} >
                  <Icon source={ChevronLeftMinor} />
                </div>
                <div className={styles.nestedTitle}>{heading}</div>
              </div>
              <div className={styles.nestedContent}>
                <div>
                  <div>
                    <div className={styles.formFields}>
                      <div className={styles.textWrapper}>
                        {customHeaderFields?.map(
                          ({ id, type, ...otherData }) => (
                            <FormProvider
                              key={id}
                              {...{ type, ...otherData }}
                            />
                          )
                        )}
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
export default FooterProvider;
