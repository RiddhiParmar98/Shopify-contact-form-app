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

function ContactUsForm() {
  const [formValues, setFormValues] = useState({});
  const [selected, setSelected] = useState("");

  const handleChange = useCallback(
    (value) => console.log("value", value),
    []
  );

  const handleSubmit = useCallback(
    (e) => e.preventDefault(),
    console.log(formValues),
    []
  );

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
                          onChange={handleChange}
                          label="First Name"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.lastName || ""}
                          name="lastName"
                          onChange={handleChange}
                          label="Last Name"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.email || ""}
                          name="email"
                          onChange={handleChange}
                          label="Email ID"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.contactNo || ""}
                          name="contactNo"
                          onChange={handleChange}
                          label="Contact Number"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <TextField
                          value={formValues.subjectLine || ""}
                          name="subjectLine"
                          onChange={handleChange}
                          label="Subject Line"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <TextField
                          value={formValues.message || ""}
                          name="message"
                          onChange={handleChange}
                          label="Message"
                          type="textarea"
                          multiline={4}
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
