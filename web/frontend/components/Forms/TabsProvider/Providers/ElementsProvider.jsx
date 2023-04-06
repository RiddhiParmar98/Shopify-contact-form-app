import React, { useState } from "react";
import { HeaderMajor, AddMajor, FooterMajor } from "@shopify/polaris-icons";
import styles from "../../CreateForm.module.css";
import { Icon } from "@shopify/polaris";
import FormDrawer from "../../FormDrawer/FormDrawer";

const ElementsProvider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

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
        <div className={styles.contentWrapper} key={id}>
          <div>
            <h3 className={styles.subHeading}>{title}</h3>
            <div>
              {data?.map(({ id, icon, label }) => (
                <div className={styles.contentWrapper} key={id}>
                  <div className={styles.listItem}>
                    <div className={styles.row} onClick={toggleDrawer}>
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
      ))}
      <FormDrawer {...{ isOpen, toggleDrawer }} />
    </section>
  );
};

export default ElementsProvider;
