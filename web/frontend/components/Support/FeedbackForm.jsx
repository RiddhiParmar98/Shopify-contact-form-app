import { useAppBridge } from "@shopify/app-bridge-react";
import {
  Button,
  Card,
  Form,
  FormLayout,
  Grid,
  Heading,
  Layout,
  Page,
  TextField,
} from "@shopify/polaris";
import { useState } from "react";
import styles from "./ContactUsForm.module.css";
const FeedbackForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    companyName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [errorValues, setErrorValues] = useState({});

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorValues(validateTextField(formValues));
  };

  const validateTextField = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Nname field is required";
    }
    if (!values.companyName) {
      errors.companyName = "Company name field is required";
    }
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.contactNumber) {
      errors.contactNumber = "Contact Number field is required";
    }
    if (!values.message) {
      errors.message = "Message field is required";
    }
    return errors;
  };

  return (
    <Page fullWidth>
      <Heading>Feedback</Heading>
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
                          id="name"
                          name="name"
                          value={formValues.name || ""}
                          onChange={(value) => handleChange("name", value)}
                          label="Name"
                          type="text"
                          error={errorValues.name}
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.companyName || ""}
                          name="companyName"
                          onChange={(value) =>
                            handleChange("companyName", value)
                          }
                          label="Website/Company Name"
                          type="text"
                          error={errorValues.companyName}
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

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.message || ""}
                          name="star ratings"
                          onChange={(value) => handleChange("message", value)}
                          label="Star Ratings"
                          type="textarea"
                          multiline={4}
                          error={errorValues.message}
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
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
};

export default FeedbackForm;
