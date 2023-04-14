import React, { useState } from "react";
import { InputTypeProvider } from "./FormTabsProvider/Providers/InputTypeProvider";
import { Button, ButtonGroup, Icon } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import styles from "./FormStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addPayloadData,
  removeElement,
} from "../../redux/reducers/inputFieldSlice";
import { useAppQuery } from "../../hooks/useAppQuery";

const FormFields = ({ tabId, toggleDrawer }) => {
  const payloadData = useSelector((state) => state.attributeObj);
  const combineObj = useSelector((state) => state.combinedObj);
  const combineObjArr = useSelector((state) => state.combinedObjects);

  const dispatch = useDispatch();

  const [commonFormInputs, setCommonFormInputs] = useState({
    label: "",
    placeholder: "",
    description: "",
    limit_chars:false,
    required: false,
    column_width: "50%",
  });

  const handleChange = (name, value) => {
    setCommonFormInputs({ ...commonFormInputs, [name]: value });
  };

  const handleSubmitData = () => {
    const attributesObject = { label: commonFormInputs, type: "attribute" };
    dispatch(addPayloadData(attributesObject));
  };

  const commonInputFields = [
    {
      id: "common_label_element",
      label: "Label",
      type: "text",
      name: "label",
      value: commonFormInputs.label || tabId.label,
      handleChange,
    },
    {
      id: "common_placeholder_element",
      label: "Placeholder",
      type: "text",
      name: "placeholder",
      value: commonFormInputs.placeholder,
      handleChange,
    },
    {
      id: "common_description_element",
      label: "Description",
      type: "text",
      name: "description",
      value: commonFormInputs.description,
      handleChange,
    },
    {
      id: "limit_chars",
      label: "Limit characters",
      type: "checkbox",
      name: "limit_chars",
      checked: commonFormInputs.limit_chars,
      handleChange,
    },
    {
      id: "required",
      label: "Required",
      type: "checkbox",
      name: "required",
      checked: commonFormInputs.required,
      handleChange,
    },
    {
      id: "hide_label",
      label: "Hide Label",
      type: "checkbox",
      name: "hide_label",
      checked: commonFormInputs.hide_label,
      handleChange,
    },
    {
      id: "column_width",
      title: "Column width",
      type: "choice_list",
      name: "column_width",
      selected: commonFormInputs.column_width,
      handleChange,
    },
  ];

  return (
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
              {commonInputFields?.map(({ id, type, title, ...otherData }) => (
                <div className={styles.formFields}>
                  <div className={styles.textWrapper}>
                    <InputTypeProvider
                      key={id}
                      {...{
                        id,
                        type,
                        title,
                        tabId,
                        ...otherData,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.itemAction}>
              <ButtonGroup>
                <Button primary onClick={handleSubmitData}>
                  Save
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormFields;
