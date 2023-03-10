import { useState, useCallback } from "react";
import {
  Form,
  FormLayout,
  TextField,
  Button,
  Card,
  Page,
  Select,
  Grid,
  Heading,
  Layout,
  Icon,
} from "@shopify/polaris";
import { NoteMajor } from "@shopify/polaris-icons";
import styles from "./Settings.module.css";

function Settings() {
  const [formValues, setFormValues] = useState({});
  const [selected, setSelected] = useState("");

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleChange = useCallback(
    (value) => console.log("value", value),
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
    []
  );

  const handleSubmit = useCallback(
    (e) => e.preventDefault(),
    console.log(formValues),
    []
  );

  const options = [{ label: "Options", value: "options" }];

  return (
    <Page fullWidth>
      <Heading>Settings</Heading>
      <div>
        <Layout>
          <div>
            <Layout.Section>
              <Card sectioned>
                <div className={styles.submissions}>
                  <Icon source={NoteMajor} color="base" />
                  <Heading>SMTP Settings</Heading>
                </div>
              </Card>
            </Layout.Section>
          </div>
          <Layout.Section>
            <div className={styles.formLayoutContainer}>
              <Card sectioned>
                <Form onSubmit={handleSubmit}>
                  <FormLayout>
                    <Grid>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <Select
                          label="Choose Provider"
                          name="form_options"
                          options={options}
                          onChange={handleSelectChange}
                          value={selected}
                          placeholder="Clear Form"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <p>MAP YOUR FIELDS</p>
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          id="smtp"
                          name="smtp"
                          value={formValues.smtp || ""}
                          onChange={handleChange}
                          label="SMTP"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.port || ""}
                          name="port"
                          onChange={handleChange}
                          label="Port"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.mail_encryption || ""}
                          name="mail_encryption"
                          onChange={handleChange}
                          label="Mail encryption"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.email || ""}
                          name="email"
                          onChange={handleChange}
                          label="Username/Email address"
                          type="text"
                          autoComplete="off"
                        />
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <TextField
                          value={formValues.password || ""}
                          name="password"
                          onChange={handleChange}
                          label="Password/App password"
                          type="password"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <p>SEND A TEST MAIL</p>
                      </Grid.Cell>

                      <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 8, lg: 8 }}>
                        <TextField
                          value={formValues.user_email || ""}
                          name="user_email"
                          onChange={handleChange}
                          label="Your Email"
                          type="email"
                          autoComplete="off"
                        />
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 4, lg: 4 }}>
                        <div className={styles.saveButton}>
                          <Button primary>Save</Button>
                        </div>
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

export default Settings;
