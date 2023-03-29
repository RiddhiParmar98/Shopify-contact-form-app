import {
  Button,
  ButtonGroup,
  Checkbox,
  Icon,
  TextField,
} from "@shopify/polaris";
import styles from "./CreateForm.module.css";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import { customTextFields } from "../../../collection/Constant";

const CustomFormFields = ({ handleSubmenu }) => {

  const [checked, setChecked] = useState(false);
  const [formFields, setFormFields] = useState({});

  const handleCheckedValue = useCallback(
    (newChecked) => setChecked(newChecked),
    []
  );
  const handleChange = (name, value) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
 
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.sideBar}>
          <div>
            <div className={`${styles.nested} ${styles.toggle}`}>
              <div className={styles.nestedHeader}>
                <div className={styles.backIcon} onClick={handleSubmenu}>
                  <Icon source={ChevronLeftMinor} />
                </div>
                <div className={styles.nestedTitle}>Heading</div>
              </div>
              <div className={styles.nestedContent}>
                <div>
                  <div>
                    <div className={styles.formFields}>
                      <div className={styles.textWrapper}>
                        {customTextFields?.map((formData) => {
                          switch (formData?.type) {
                            case "text":
                              return (
                                <TextField
                                  value={formFields.title}
                                  id={formData?.id}
                                  name="title"  
                                  onChange={(value) =>
                                    handleChange("title", value)
                                  }
                                  label={formData?.label}
                                  type={formData?.type}
                                />
                              );
                            case "checkbox":
                              return (
                                <Checkbox
                                  label={formData?.label}
                                  checked={checked}
                                  onChange={handleCheckedValue}
                                />
                              );
                            default:
                              return null;
                          }
                        })}
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
        </div>
      </div>
    </>
  );
};

export default CustomFormFields;
