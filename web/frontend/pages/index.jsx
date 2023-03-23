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
  QuestionMarkInverseMajor,
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
  {
    label: "Full Screen",
    destination: "/full-screen"
  }
];

export const Tabs = [
  {
    id: 'dashboard',
    content: "Dashboard",
    icon: AnalyticsMajor,
    path: "/dashboard"
  },
  {
    id: 'form',
    content: "Form",
    icon: FormsMajor,
    path: "/form",
  },
  {
    id: 'submission',
    content: "Submissions",
    icon: ReportsMajor,
    path: "/submissions",
  },
  {
    id: "settings",
    content: "Settings",
    icon: SettingsMajor,
    path: "/settings"
  },
  {
    id: 'plans',
    content: "Plans",
    icon: CashDollarMajor,
    path: "/plans",
  },
  {
    id: 'support',
    content: "Support",
    icon: QuestionMarkInverseMajor,
    children: [
      {
        id: "faq",
        content: "FAQ",
        path: "#",
        icon: CircleInformationMajor,
      },
      {
        id: "contact-us",
        content: "Contact Us",
        path: "/contact-us",
        icon: EmailMajor,
      },
      {
        id: "feedback",
        content: "Feedback",
        path: "/feedback",
        icon: CircleInformationMajor,
      },
    ],
  }
]

const routes = [
  {
    id: "dashboard",
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    id: "form",
    name: "Form",
    path: "/form",
    exact: true,
    element: <Forms />,
  },
  {
    id: "submissions",
    name: "Submissions",
    path: "/submissions",
    exact: true,
    element: <Submissions />,
  },
  {
    id: "settings",
    name: "Settings",
    path: "/settings",
    exact: true,
    element: <Settings />,
  },
  {
    id: "plans",
    name: "Plans",
    path: "/plans",
    exact: true,
    element: <Pricingplans />,
  },
  {
    id: "contact-us",
    name: "Contact Us",
    path: "/contact-us",
    exact: true,
    element: <ContactUsForm />,
  }
];

export default routes;
