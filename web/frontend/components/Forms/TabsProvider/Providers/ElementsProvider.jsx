import React, { useState } from "react";
import { HeaderMajor, AddMajor, FooterMajor } from "@shopify/polaris-icons";
import { Icon } from "@shopify/polaris";
import FormDrawer from "../../FormDrawer/FormDrawer";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../FormStyle.module.css";
import { addPayloadData } from "../../../../redux/reducers/inputFieldSlice";

const ElementsProvider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabId, setTabId] = useState({});
  const formData = useSelector((state) => state.input_fields);
  const payloadData = useSelector((state) => state.labelObj);

  const dispatch = useDispatch();
  const toggleDrawer = (id, label) => {
    setTabId({ id: id, label: label });
    setIsOpen((prev) => !prev);
  };
  const handlePayloadData = (id, label) => {
    const labelObject = { label: label, type: "label" };
    dispatch(addPayloadData(labelObject));
    toggleDrawer(id, label);
  };

  const formElements = [
    {
      id: "header",
      title: "",
      data: [
        {
          id: "header_tab",
          label: "Header",
          icon: HeaderMajor,
        },
      ],
    },
    {
      id: "element",
      title: "Elements",
      data: [
        {
          id: "add_element",
          label: "Add Element",
          icon: AddMajor,
        },
      ],
    },
    {
      id: "footer",
      title: "",
      data: [
        {
          id: "footer_tab",
          label: "Footer",
          icon: FooterMajor,
        },
      ],
    },
  ];

  return (
    <section>
      {formElements?.map(({ id, title, data }) => (
        <div className={styles.rootContent} key={id}>
          <div className={styles.contentWrapper}>
            <div>
              <h3 className={styles.subHeading}>{title}</h3>
              <div>
                {formData &&
                  id === "element" &&
                  formData?.map(({ id, title, icon }) => (
                    <div className={styles.contentWrapper} key={id}>
                      <div className={styles.listItem}>
                        <div
                          className={styles.row}
                          onClick={() => handlePayloadData(id, title)}
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
                {data?.map(({ id, icon, label }) => (
                  <div className={styles.contentWrapper} key={id}>
                    <div className={styles.listItem}>
                      <div
                        className={styles.row}
                        onClick={() => toggleDrawer(id, label)}
                      >
                        <div className={styles.elementIcon}>
                          <Icon source={icon} />
                        </div>
                        <div className={styles.elementTitle}>
                          <h3>{label}</h3>
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
      <FormDrawer {...{ isOpen, setIsOpen, toggleDrawer, tabId }} />
    </section>
  );
};

export default ElementsProvider;
