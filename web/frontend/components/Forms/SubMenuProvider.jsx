import CreateForm from "./CreateForm"
import CustomFormFields from "./CustomFormFields"
import FooterProvider from "./FooterProvider"

export const SubMenuProvider = ({id,heading}) => {
switch(id){
    case "header": 
      return <CustomFormFields heading={heading}/>
    case "footer":
      return <FooterProvider heading={heading}/>
    default:
      return <CreateForm/>
  }
}