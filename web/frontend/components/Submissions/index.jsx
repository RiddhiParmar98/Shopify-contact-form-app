import {
  TextField,
  IndexTable,
  Card,
  Filters,
  Select,
  useIndexResourceState,
  Heading,
  Page,
  Grid,
} from "@shopify/polaris";
import { useState, useCallback } from "react";

export default function Submissions() {
  const customers = [
    {
      id: "1",
      url: "#",
      firstName: "Parth",
      lastName: "Patel",
      designation: "Mobile App Development",
      contactNo: "+1 239 234 2434",
    },
    {
      id: "2",
      url: "#",
      firstName: "Dhvanil",
      lastName: "Patel",
      designation: "Website SEO & Marketing",
      contactNo: "+1 354 234 2434",
    },
  ];
  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);
  const [taggedWith, setTaggedWith] = useState("VIP");
  const [queryValue, setQueryValue] = useState(null);
  const [sortValue, setSortValue] = useState("today");

  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);
  const handleSortChange = useCallback((value) => setSortValue(value), []);

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const statusOptions = [{ label: "Status", value: "status" }];

  const formOptions = [{ label: "Form", value: "form" }];

  const moreOptions = [{ label: "More Filter", value: "more filter" }];

  const exportOptions = [
    { label: "Export Selected", value: "export selected" },
  ];

  const rowMarkup = customers.map(
    ({ id, firstName, lastName, designation, contactNo }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <span>{firstName}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>{lastName}</IndexTable.Cell>
        <IndexTable.Cell>
          <span>{designation}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <span>{contactNo}</span>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <Page fullWidth>
      <Heading>Submissions</Heading>
      <Card>
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Filters
              queryPlaceholder="Search submission"
              queryValue={queryValue}
              filters={[]}
              onQueryChange={setQueryValue}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleClearAll}
            />
          </div>
          <div style={{ display: "block" }}>
            <Grid>
              <Select
                options={statusOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
              <Select
                options={formOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
              <Select
                options={moreOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
            </Grid>

            <Grid>
              <Select
                options={exportOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
              <Select
                labelInline
                label="Sort by"
                options={sortOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
            </Grid>
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
            { title: "2 Records showing" },
            // {
            //   id: "amount-spent",
            //   title: <span>Amount spent</span>,
            // },
            ,
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Page>
  );
}
