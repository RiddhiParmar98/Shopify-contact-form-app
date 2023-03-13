import {
  Button,
  Card,
  Checkbox,
  Heading,
  Layout,
  Page,
  Stack,
} from "@shopify/polaris";
import React from "react";

export default function Forms() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Stack>
            <Stack.Item fill>
              <Heading>Form</Heading>
            </Stack.Item>
            <Stack.Item>
              <Button primary >Create Form</Button>
            </Stack.Item>
          </Stack>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Stack>
              <Stack.Item>
                <Checkbox
                  label="2 Forms"
        
                />
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
