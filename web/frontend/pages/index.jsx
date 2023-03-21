import React from "react";
import Dashboard from "../components/Dashboard";
import Forms from "../components/Forms";
import CreateForm from "../components/Forms/CreateForm";
import Pricingplans from "../components/Pricingplans";
import Settings from "../components/Settings";
import Submissions from "../components/Submissions";
import ContactUsForm from "../components/Support/ContactUsForm";
import {
  AnalyticsMajor,
  FormsMajor,
  SettingsMajor,
  CashDollarMajor,
  QuestionMarkMajor,
  ReportsMajor,
  EmailMajor,
  CircleInformationMajor
} from "@shopify/polaris-icons";

export const navigation = [
  {
    label: "Dashboard",
    destination: "/dashboard",
  },
  {
    label: "Form",
    destination: "/form",
  },
  {
    label: "Submissions",
    destination: "/submissions",
  },
  {
    label: "Settings",
    destination: "/settings",
  },
  {
    label: "Pricing Plans",
    destination: "/plans",
  },
  {
    label: "Contact Us",
    destination: "/contact-us",
  },
];

const routes = [
  {
    id: "home",
    name: "Home",
    path: "/dashboard",
    content: "Dashboard",
    exact: true,
    icon: AnalyticsMajor,
    element: <Dashboard />,
  },
  {
    id: "form",
    name: "Form",
    path: "/form",
    content: "Form",
    exact: true,
    icon: FormsMajor,
    element: <Forms />,
  },
  {
    id: "create_form",
    name: "Create Form",
    path: "/form/new",
    exact: true,
    icon: FormsMajor,
    element: <CreateForm />,
  },
  {
    id: "submissions",
    name: "Submissions",
    path: "/submissions",
    content: "Submissions",
    exact: true,
    icon: ReportsMajor,
    element: <Submissions />,
  },
  {
    id: "settings",
    name: "Settings",
    path: "/settings",
    content: "Settings",
    exact: true,
    icon: SettingsMajor,
    element: <Settings />,
  },
  {
    id: "plans",
    name: "Plans",
    path: "/plans",
    content: "Plans",
    exact: true,
    icon: CashDollarMajor,
    element: <Pricingplans />,
  },
  {
    id: "support",
    name: "Support",
    content: "Support",
    icon: QuestionMarkMajor,
    // children: [
    //   {
    //     id: "faq",
    //     name: "FAQ",
    //     content: "FAQ",
    //     path: "/contact-us",
    //     icon: CircleInformationMajor,
    //     // element: <ContactUsForm />,
    //   },
    //   {
    //     id: "contact-us",
    //     name: "Contact Us",
    //     content: "Contact Us",
    //     path: "/contact-us",
    //     exact: true,
    //     icon: EmailMajor,
    //     element: <ContactUsForm />,
    //   },
    //   {
    //     id: "feedback",
    //     name: "Feedback",
    //     content: "Feedback",
    //     path: "/feedback",
    //     exact: true,
    //     icon: CircleInformationMajor,
    //     // element: <ContactUsForm/>
    //   },
    // ],
  },
];

export default routes;
