import { useState, useCallback, useEffect } from "react";
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
import { postSMTPSettings } from "../../redux/actions/allActions";
import { useDispatch } from "react-redux";

function Settings() {
  const [formValues, setFormValues] = useState({
    smtp: "",
    email: "",
    password: "",
    mail_encryption: "",
    port: "",
    appId: ""
  });
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleChange = useCallback(
    (value) => {
      console.log("value", value)
    },
    [formValues]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log('formvalues :>> ', formValues);
      // dispatch(postSMTPSettings(formValues))
    }, []);

  useEffect(() => {
    setFormValues("appId", localStorage.getItem("app_api_key"))
    // handleSubmit()
  }, [handleSubmit])


  const mailEncOptions = [
    { label: "Choose Option", value: "choose_option", disabled: true },
    { label: "TLS", value: "tls" },
    { label: "SSL", value: "ssl" },
  ];



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
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <FormLayout>
                    <Grid>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
                        <p>MAP YOUR FIELDS</p>
                      </Grid.Cell>
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 12, lg: 12 }}>
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
                      <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <Select
                          label="Mail encryption"
                          name="mail_encryption"
                          options={mailEncOptions}
                          onChange={handleSelectChange}
                          value={selected}
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
