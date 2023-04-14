import { Button, Checkbox, ChoiceList, TextField } from "@shopify/polaris";
import { removeElement } from "../../../../redux/reducers/inputFieldSlice";
import { useDispatch } from "react-redux";

export const InputTypeProvider = ({
  type,
  name,
  handleChange,
  title,
  selected,
  id,
  tabId,
  ...props
}) => {
  const dispatch = useDispatch();
  const handleRemoveElement = (title) => {
    dispatch(removeElement({ title: title, tabTitle: tabId?.id }));
  };
  switch (type) {
    case "text":
      return (
        <TextField
          {...{ type }}
          {...props}
          onChange={(value) => handleChange(name, value)}
        />
      );
    case "checkbox":
      return (
        <Checkbox {...props} onChange={(check) => handleChange(name, check)} />
      );
    case "choice_list":
      return (
        <>
          <ChoiceList
            title={title}
            choices={[
              { label: "33%", value: "33%" },
              { label: "50%", value: "50%" },
              { label: "100%", value: "100%" },
            ]}
            selected={selected}
            onChange={(value) => handleChange(name, value)}
          />

          <Button
            plain
            destructive
            fullWidth
            onClick={() => handleRemoveElement(title)}
          >
            Remove this element
          </Button>
        </>
      );
    default:
      return null;
  }
};
