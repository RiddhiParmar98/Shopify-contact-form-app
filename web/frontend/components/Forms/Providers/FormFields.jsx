import React from 'react'
import { HeaderMajor, AddMajor, FooterMajor } from "@shopify/polaris-icons";
import styles from "../CreateForm.module.css";

const FormFields = () => {

  const formInputFields = [
    {
      label: "Header",
      fields: [
        {
          id: 'element_header',
          icon: HeaderMajor,
        }
      ]
    },{
      label: "Add Element",
      fields: [
        {
          id: 'add_element',
          icon: AddMajor,       
        }
      ]
    },{
      label: "Footer",
      fields: [
        {
          id: 'footer_element',
          icon: FooterMajor,
        }
      ]
    }
  ];

  return (
    <div>
       <div className={styles.topBar}>
              <div className={styles.sideBar}>
                <div className={styles.logo}>
                  <Link url="/form" onClick={handleRedirectToForm}>
                    <Icon
                      source={ChevronLeftMinor}
                      className={styles.leftIcon}
                    />
                  </Link>
                </div>
                <div className={styles.backTitle}>
                  <Link url="/form" onClick={handleRedirectToForm}>
                    <span>Back to List</span>
                  </Link>
                </div>
              </div>
              <div className={styles.rightContext}>
                <div className={styles.innerContext}>
                  <div className={styles.itemAction}>
                    <ButtonGroup>
                      <Button onClick={handleRedirectToForm}>Cancel</Button>
                      <Button primary>Save</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default FormFields