export interface FormHeading{
    title: string;
    description: string;
}

export const personalInfoHeading: FormHeading = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number."
}


export const selectPlanHeading: FormHeading = {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing."
}
 

export const addOnHeading: FormHeading = {
  title: "Pick add-ons",
  description: "Add-ons help enhance your gaming experience."
}

export const finishingUpHeading: FormHeading = {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming."
}