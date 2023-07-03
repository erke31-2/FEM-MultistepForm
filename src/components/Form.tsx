import PersonalInfo from "./Forms/PersonalInfo/PersonalInfo";
import SelectPlan from "./Forms/SelectPlan/SelectPlan";
import SelectAddOns from "./Forms/SelectAddOn/SelectAddOns";
import FinishingUp from "./Forms/ConfirmFinishing/FinishingUp";
import useFormStore from "../store/useFormStore";
const Form = () => {
  const currentStep = useFormStore((state) => state.currentStep);
  switch (currentStep) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <SelectAddOns />;
    case 4:
      return <FinishingUp />;
    default:
      return null;
  }
};
export default Form;
