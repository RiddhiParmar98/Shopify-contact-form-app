import { Checkbox, TextField } from '@shopify/polaris';

export const FormProvider = ({type, name, onChange: handleChange, ...props}) => {
    switch (type) {
        case 'text':
            return  <TextField onChange={(value) => handleChange(name, value)} {...{type}} {...props} />
        case 'checkbox':
            return <Checkbox onChange={(value) => handleChange(name, value)} {...{type}} {...props} />
        default: return null
    }
}