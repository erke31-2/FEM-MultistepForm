import { FormHeading } from "../constants/FormHeadings"

const FormHeader: React.FC<FormHeading> = ({title, description}) => {
  return (
    <div>
        <h1 className="font-bold text-2xl md:text-3xl text-marineBlue mb-2">{title}</h1>
        <p className="text-coolGray pr-8">{description}</p>
    </div>
  )
}
export default FormHeader