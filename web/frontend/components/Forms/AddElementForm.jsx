import React from "react";
import { Icon } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import {
  TextMajor,
  EmailMajor,
  TypeMajor,
  TextAlignmentLeftMajor,
  MentionMajor,
  TextBlockMajor,
  HashtagMajor,
  HideMinor,
} from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../redux/reducers/inputFieldSlice";
import styles from "./CreateForm.module.css";

const AddElementForm = ({ tabId, toggleDrawer }) => {
  const formData = useSelector((state) => state.input_fields);
  const dispatch = useDispatch();
  const customElements = [
    {
      label: "Inputs",
      fields: [
        {
          id: "text",
          title: "Text",
          icon: TextMajor,
        },
        {
          id: "email",
          title: "Email",
          icon: EmailMajor,
        },
        {
          id: "name",
          title: "Name",
          icon: MentionMajor,
        },
        {
          id: "textarea",
          title: "Textarea",
          icon: TextBlockMajor,
        },
        {
          id: "number",
          title: "Number",
          icon: HashtagMajor,
        },
        {
          id: "password",
          title: "Password",
          icon: HideMinor,
        },
      ],
    },
    {
      label: "Static Text",
      fields: [
        {
          id: "heading",
          title: "Heading",
          icon: TypeMajor,
        },
        {
          id: "paragraph",
          title: "Paragraph",
          icon: TextAlignmentLeftMajor,
        },
      ],
    },
  ];

  const handleRedirectToFields = (data) => {
    dispatch(addElement(data));
    toggleDrawer();
  };
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
                {customElements?.map(({ label, fields }, index) => (
                  <div className={styles.contentWrapper} key={index}>
                    <div>
                      <h3 className={styles.subHeading}>{label}</h3>
                      <div>
                        {fields?.map((data) => (
                          <div className={styles.contentWrapper} key={data?.id}>
                            <div className={styles.listItem}>
                              <div
                                className={styles.row}
                                onClick={() => handleRedirectToFields(data)}
                              >
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
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddElementForm;
