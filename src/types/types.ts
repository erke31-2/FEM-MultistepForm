import { AddOn } from "../constants/AddOns";
import { Plan } from "../constants/Plans";

interface Step {
  currentStep: number;
  setCurrentStep: (count: number) => void;
}

//personal info state
export interface PersonalInfoFormFields{
  name: string;
  email: string;
  phone: string;
}
interface PersonalInfo extends PersonalInfoFormFields{
  setPersonalFields: (field: keyof PersonalInfo, value: string) => void;
}
interface PersonalInfoData {
  personalInfo: PersonalInfo;
}

interface Monthly {
  isMonthly: boolean;
  toggleIsMonthly: () => void;
}

//select plan state

interface SelectPlan {
  plans: Plan[]
  selectedPlan: Plan | null
  setSelectedPlan: (plan: Plan) => void;
}
interface SelectedPlanData {
  selectPlan: SelectPlan;
}



interface SelectAddOns {
  addOns: AddOn[]
  selectedAddOns: AddOn[]
  toggleSelectedAddOns: (addOn: AddOn) => void
}

interface SelectedAddOnsData {
  selectAddons: SelectAddOns
}


interface ShowThankYou{
  isShowThankYou: boolean;
  setIsShowThankYou: () => void
}



export interface FormData extends 
    PersonalInfoData,
    SelectedPlanData,
    SelectedAddOnsData,
    Step,
    Monthly,
    ShowThankYou {}
