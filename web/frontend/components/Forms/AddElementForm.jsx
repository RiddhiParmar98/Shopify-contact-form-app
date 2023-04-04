import React from "react";
import { Icon } from "@shopify/polaris";
import { ChevronLeftMinor } from "@shopify/polaris-icons";
import { TextMajor, EmailMajor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../redux/reducers/inputFieldSlice";
import styles from "./CreateForm.module.css";

const AddElementForm = ({ heading }) => {

  const formData = useSelector((state)=> state.elementData);
  console.log('formData: ', formData);
  const dispatch = useDispatch();
  const customElements = [
    {
      label: "Inputs",
      fields: [
        {
          id: 'text',
          title: 'Text',
          icon: TextMajor
        },
        {
          id: 'email',
          title: 'Email',
          icon: EmailMajor
        }
      ]
    }
  ];
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.sideBar}>
          <div>
            <div className={`${styles.nested} ${styles.toggle}`}>
              <div className={styles.nestedHeader}>
                <div className={styles.backIcon}>
                  <Icon source={ChevronLeftMinor} />
                </div>
                <div className={styles.nestedTitle}>{heading}</div>
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
                                <div className={styles.row} onClick={()=>dispatch(addElement(data))}>
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
        </div>
      </div>
    </>
  );
};

export default AddElementForm;
