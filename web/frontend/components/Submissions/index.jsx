import {
  IndexTable,
  Card,
  Filters,
  Select,
  useIndexResourceState,
  Heading,
  Page,
  Icon,
  Button,
} from "@shopify/polaris";
import { DeleteMajor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import "./Submissions.module.css";
import styles from "./Submissions.module.css";

export default function Submissions() {
  const customers = [
    {
      id: "1",
      url: "#",
      firstName: "Parth",
      lastName: "Patel",
      designation: "Mobile App Development",
      contactNo: "+1 239 234 2434",
      createdAt:  "2023-03-28 05:58:25"
    },
    {
      id: "2",
      url: "#",
      firstName: "Dhvanil",
      lastName: "Patel",
      designation: "Website SEO & Marketing",
      contactNo: "+1 354 234 2434",
      createdAt:  "2023-02-20 06:20:10"
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
  const [sortValue, setSortValue] = useState("");

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

  const handleClick = () => {
    alert("delete action");
  };

  const rowMarkup = customers.map(
    ({ id, firstName, lastName, designation, contactNo, createdAt }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell flush className={styles.tableCell}>
          <span>{firstName}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>{lastName}</IndexTable.Cell>
        <IndexTable.Cell>
          <span>{designation}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <span>{contactNo}</span>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <span>{createdAt}</span>
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
          <div style={{ width: "50%" }}>
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
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ fontSize: "1.3em" }}>2 Records Showing </h4>

              <Button
                onClick={handleClick}
                plain
                icon={<Icon source={DeleteMajor} color="base" />}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "350px",
              justifyContent: "flex-end",
            }}
          >
            <div className={styles.statusOption}>
              <Select
                options={statusOptions}
                value={sortValue}
                onChange={handleSortChange}
              />
            </div>
            <div className={styles.statusOption}>
            <Select
              options={formOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
            </div>
            <div className={styles.statusOption}>
            <Select
              options={moreOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
            </div>
            <div className={styles.statusOption}>
            <Select
              options={exportOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
            </div>
            <div className={styles.statusOption}>
            <Select
              labelInline
              label="Sort by"
              options={sortOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
            </div>
            {/* </Grid> */}
          </div>
        </div>
        <div>
        <IndexTable
          resourceName={resourceName}
          itemCount={customers.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[{title:""}]}
        >
          {rowMarkup}
        </IndexTable>
        </div>
      </Card>
    </Page>
  );
}
