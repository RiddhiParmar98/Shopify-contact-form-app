import { useState, useCallback } from "react";
import {
  Form,
  FormLayout,
  TextField,
  Button,
  Card,
  Page,
  Grid,
  Heading,
  Layout,
} from "@shopify/polaris";
import styles from "./ContactUsForm.module.css";
// import { createFormApi } from "../../api/api";

function ContactUsForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    subjectLine: "",
    message: "",
  });
  const [selected, setSelected] = useState("");
  const [errorValues, setErrorValues] = useState({});

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorValues(validateTextField(formValues))
    // const userData = await createFormApi({...formValues})
    // console.log('userData: ', userData);
  };

  const validateTextField = (values) => {
    let errors={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log('values: ', values);
    if (!values.firstName) {
        errors.firstName= "First name field is required";
    }
    if(!values.lastName){
      errors.lastName= "Last name field is required";
    }
    if(!values.email){
      errors.email= "Email address is required";
    }else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format!";
    }
    if(!values.contactNumber){
      errors.contactNumber= "Contact Number field is required";
    }
    if(!values.subjectLine){
      errors.subjectLine= "Subject line field is required";
    }
    if(!values.message){
      errors.message= "Message field is required";
    }
    return errors;
  };
  console.log('errorValues', errorValues)
  return (
    <Page fullWidth>
      <Heading>Contact us</Heading>
      <div>
        <Layout>
          <Layout.Section>
            <div className={styles.formLayoutContainer}>
              <Card sectioned>
                <Form onSubmit={handleSubmit}>
                  <FormLayout>
                    <Grid>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          id="firstName"
                          name="firstName"
                          value={formValues.firstName || ""}
                          onChange={(value) => handleChange("firstName", value)}
                          label="First Name"
                          type="text"
                          error={errorValues.firstName}
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.lastName || ""}
                          name="lastName"
                          onChange={(value) => handleChange("lastName", value)}
                          label="Last Name"
                          type="text"
                          error={errorValues.lastName}
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.email || ""}
                          name="email"
                          onChange={(value) => handleChange("email", value)}
                          label="Email ID"
                          type="email"
                          error={errorValues.email}
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.contactNumber || ""}
                          name="contactNumber"
                          onChange={(value) =>
                            handleChange("contactNumber", value)
                          }
                          label="Contact Number"
                          type="number"
                          error={errorValues.contactNumber}
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <TextField
                          value={formValues.subjectLine || ""}
                          name="subjectLine"
                          onChange={(value) =>
                            handleChange("subjectLine", value)
                          }
                          label="Subject Line"
                          type="text"
                          error={errorValues.subjectLine}
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <TextField
                          value={formValues.message || ""}
                          name="message"
                          onChange={(value) => handleChange("message", value)}
                          label="Message"
                          type="textarea"
                          multiline={4}
                          error={errorValues.message}
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <Button submit primary>
                          Submit
                        </Button>
                      </Grid.Cell>
                    </Grid>
                  </FormLayout>
                </Form>
              </Card>
            </div>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
}

export default ContactUsForm;
