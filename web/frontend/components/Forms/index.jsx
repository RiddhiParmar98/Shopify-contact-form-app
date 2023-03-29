import {
  Button,
  Card,
  Heading,
  Icon,
  IndexTable,
  Layout,
  Page,
  Select,
  Stack,
  TextStyle,
  Thumbnail,
  useIndexResourceState,
} from "@shopify/polaris";
import { CategoriesMajor } from "@shopify/polaris-icons";
import { DeleteMajor } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import SubmissionSVG from "../utils/SubmissionSVG";
import {useAppBridge} from '@shopify/app-bridge-react';
import {Fullscreen} from '@shopify/app-bridge/actions';

export default function Forms() {
  const [sortValue, setSortValue] = useState("");
  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const [isFullScreen,setIsFullScreen] = useState(false);
  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const customers = [
    {
      id: "1",
      url: "#",
      shortCode: "MTA3OTE4",
      title: "Contact Form",
      createdOn: "2023-02-28 05:58:25",
    },
    {
      id: "2",
      url: "#",
      shortCode: "MTA3Nzg3",
      title: "Registration Form",
      createdOn: "2023-02-28 06:48:18",
    },
  ];

  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const navigate = useNavigate();
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const rowMarkup = customers.map(
    ({ id, shortCode, title, createdOn }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <span>{shortCode}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>
          <Stack alignment="center">
            <ToggleSwitch />
          </Stack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Stack alignment="center">
            <Thumbnail source={SubmissionSVG} alt={title} size="medium" />
          </Stack>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <span>{createdOn}</span>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const handleSortChange = useCallback((value) => setSortValue(value), []);
  const handleCreateForm = () => {
    fullscreen.dispatch(Fullscreen.Action.ENTER);
    setIsFullScreen(true);
    navigate("/form/new");
  };
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Stack>
            <Stack.Item fill>
              <Heading>Form</Heading>
            </Stack.Item>
            <Stack.Item>
              <Button primary onClick={handleCreateForm}>
                Create Form
              </Button>
            </Stack.Item>
          </Stack>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <div
              style={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <TextStyle variation="strong">2 Forms</TextStyle>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "200px",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  plain
                  icon={<Icon source={CategoriesMajor} color="base" />}
                />
                <Button
                  plain
                  icon={<Icon source={DeleteMajor} color="base" />}
                />
                <Select
                  labelInline
                  label="Sort by"
                  options={sortOptions}
                  value={sortValue}
                  onChange={handleSortChange}
                />
              </div>
            </div>
            <IndexTable
              resourceName={resourceName}
              itemCount={customers.length}
              selectedItemsCount={
                allResourcesSelected ? "All" : selectedResources.length
              }
              onSelectionChange={handleSelectionChange}
              headings={[
                { title: "Short Code" },
                { title: "Title" },
                { title: "Status" },
                { title: "Submission" },
                { title: "Created On" },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
