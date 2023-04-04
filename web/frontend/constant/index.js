export const pricingPlanData = [
    {
      heading: "Form",
      tableData: [
        { title: "Number of form(s)", unpaid: 1, paid: "Unlimited" },
        { title: "Number of fields per form", unpaid: 12, paid: "Unlimited" },
        {
          title: "Number of submissions per month",
          unpaid: "Unlimited",
          paid: "Unlimited",
        },
        { title: "Number of emails per month", unpaid: 40, paid: "Unlimited" },
        {
          title: "Multi-step form ( Wizard form )",
          unpaid: true,
          paid: "Unlimited",
        },
        { title: "Conditional option fields", unpaid: true, paid: "Unlimited" },
        { title: "Shopify Registration form", unpaid: false, paid: "Unlimited" },
        { title: "Bulk Order form", unpaid: false, paid: "Unlimited" },
        { title: "Cart form", unpaid: false, paid: "Unlimited" },
      ],
    },
    {
      heading: "Style",
      tableData: [
        { title: "Prebuilt templates", unpaid: "unlimited", paid: false },
        { title: "Customize form style", unpaid: true, paid: true },
        { title: "Customize field style", unpaid: true, paid: true },
        { title: "Background options", unpaid: true, paid: true },
      ],
    },
    {
      heading: "Third Party Integration",
      tableData: [
        { title: "Shopify customer account", unpaid: false, paid: true },
        { title: "Google reCAPTCHA", unpaid: true, paid: true },
        { title: "Mailchimp", unpaid: true, paid: true },
        { title: "Klaviyo", unpaid: true, paid: true },
        { title: "Ominisend", unpaid: true, paid: true },
        { title: "Zapier", unpaid: false, paid: true },
        { title: "Hubspot", unpaid: false, paid: true },
        { title: "GetResponse", unpaid: false, paid: true },
        { title: "Sendinblue", unpaid: false, paid: true },
        { title: "Campaign Monitor", unpaid: false, paid: true },
        { title: "ActiveCampaign", unpaid: false, paid: true },
      ],
    },
    {
      heading: "Features",
      tableData: [
        { title: "Realtime preview", unpaid: true, paid: true },
        { title: "Duplicate form", unpaid: true, paid: true },
        { title: "URL where form is submitted", unpaid: true, paid: true },
        { title: "Store submissions", unpaid: true, paid: true },
        { title: "Export submissions", unpaid: false, paid: true },
        { title: "Email notification", unpaid: true, paid: true },
        { title: "Auto response", unpaid: true, paid: true },
        { title: "Support", unpaid: true, paid: true },
        { title: "File upload", unpaid: "2 MB", paid: "30 MB" },
        { title: "Storage size", unpaid: "200 MB", paid: "2 GB" },
        { title: "Remove copyright", unpaid: false, paid: true },
      ],
    },
  ];
  
  export const tabs = [
    {
      id: "elements",
      content: "Elements",
      accessibilityLabel: "All customers",
      panelID: "elements-fitted-content",
    },
    {
      id: "settings",
      content: "Settings",
      panelID: "settings-fitted-content",
    },
    {
      id: "publish",
      content: "Publish",
      panelID: "publish-fitted-content",
    },
  ];
  
  export const customHeaderFields = [
    { id: "header_element", label: "Title", type: "text", value: "" },
    { id: "header_element", label: "Description", type: "text", value: "" },
  ];
  export const customTextFields = [
    { id: "text_element", label: "Label", type: "text", value: "" },
    { id: "text_element", label: "Placeholder", type: "text", value: "" },
    { id: "text_element", label: "Description", type: "text", value: "" },
    { id: "text_element", label: "Required", type: "checkbox", value: "" },
  ];
  export const customEmailFields = [
    { id: "email_element", label: "Label", type: "text", value: "" },
    { id: "email_element", label: "Placeholder", type: "text", value: "" },
    { id: "email_element", label: "Description", type: "text", value: "" },
    { id: "email_element", label: "Required", type: "checkbox", value: "" },
  ];
  