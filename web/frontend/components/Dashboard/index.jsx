import { useCallback, useState } from "react";
import {
  Card,
  Heading,
  Icon,
  Layout,
  Page,
  Select,
  TextContainer,
} from "@shopify/polaris";
import Chart from "react-apexcharts";
import { NoteMajor } from "@shopify/polaris-icons";
import { useAppQuery } from "../../hooks/useAppQuery";
import { useSelector,useDispatch } from "react-redux";
// import { decrement, increment } from '../../redux/reducers/counterSlice'
import styles from "./Dashboard.module.css";

const defaultData = [
  { id: 1, x: 5, y: 10 },
  { id: 2, x: 10, y: 11 },
  { id: 3, x: 15, y: 15 },
  { id: 4, x: 20, y: 13 },
  { id: 5, x: 25, y: 17 },
  { id: 6, x: 30, y: 12 },
];

function Dashboard() {

  // const count = useSelector((state) => state.value)
  // const dispatch = useDispatch();
  // const formData = useSelector((state)=> console.log('state', state));
  const [selected, setSelected] = useState("Select an option");

  const [options, setOptions] = useState({
    // chart: {
    //   id: "Chart",
    // },
    xaxis: {
      categories: [...defaultData.map((item, idx) => item.x)],
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      showForSingleSeries: true,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Jan 2023",
      data: [...defaultData.map((item, idx) => item.y)],
    },
  ]);

  const filterOptions = [
    { label: "Last 7 day", value: "last week" },
    { label: "Monthly", value: "monthly" },
    { label: "Custom Date", value: "custom date" },
  ];

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const { data } = useAppQuery({
    url: "/api/createContactForm",
    fetchInit: {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: "Krima",
        lastName: "Dona",
        email: "jackJonaOff@gmail.com",
        subjectLine: "Testing Contact Form",
        contactNumber: "9904757571",
        message: "test",
      }),
    },
  });

  return (
    <Page fullWidth>
      <div className={styles.dropdownSection}>
        <Heading>Dashboard</Heading>
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
        <Select
          options={filterOptions}
          onChange={handleSelectChange}
          value={selected}
        />
      </div>
      <div className={styles.layoutContainer}>
        <Layout>
          <div className={styles.card}>
            <Layout.Section>
              <Card sectioned>
                <div className={styles.submissions}>
                  <Icon source={NoteMajor} color="base" />
                  <Heading>Submissions</Heading>
                </div>
                <Chart
                  options={options}
                  series={series}
                  type="line"
                  width={500}
                  height={320}
                />
              </Card>
            </Layout.Section>
          </div>
          <div>
            <Layout.Section secondary>
              <Card sectioned>
                <div className={styles.submissions}>
                  <Icon source={NoteMajor} color="base" />
                  <Heading>Total Submissions</Heading>
                </div>
                <TextContainer>
                  <p className={styles.totalSubmission}>1012</p>
                </TextContainer>
              </Card>
            </Layout.Section>
          </div>
        </Layout>
      </div>
    </Page>
  );
}

export default Dashboard;
