import { useState } from "react";
import { selectPlanHeading } from "../../../constants/FormHeadings";
import useFormStore from "../../../store/useFormStore";
import FormHeader from "../../FormHeader";
import PlanComponent from "./PlanComponent";

const SelectPlan = () => {
  const { plans, selectedPlan } = useFormStore((state) => state.selectPlan);
  const toggleIsMonthly = useFormStore((state) => state.toggleIsMonthly);
  const isMonthly = useFormStore((state) => state.isMonthly);
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (!selectedPlan){
      setError("Please select one plan!")
    }else{
      setCurrentStep(3)
    }
  };

  return (
    <>
      <div className="flex flex-col px-6 py-8 bg-White w-[375px] md:w-full absolute -top-[82px] md:top-0 md:relative rounded-lg gap-3 shadow-md shadow-coolGray md:shadow-none">
        <FormHeader {...selectPlanHeading} />
        {error && <span className="text-sm text-strawberryRed font-[500]">{error}</span>}
        <ul className="grid grid-cols-3 gap-2">
          {plans.map((plan) => (
            <PlanComponent key={plan.title} plan={plan} />
          ))}
        </ul>
        <div className="bg-magnolia rounded-md flex items-center py-3 justify-evenly mt-4">
          <span
            className={`font-[500] ${
              isMonthly ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Monthly
          </span>
          <div
            className="bg-marineBlue w-10 h-5 rounded-xl relative cursor-pointer"
            onClick={toggleIsMonthly}
          >
            <div
              className={`w-4 h-4 rounded-full bg-alabaster absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                isMonthly ? "translate-x-1" : "translate-x-5"
              }`}
            />
          </div>
          <span
            className={`font-[500] ${
              !isMonthly ? "text-marineBlue" : "text-coolGray"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="w-full md:px-8 absolute bottom-0 md:relative bg-White py-4 shadow-sm shadow-lightGray md:shadow-none">
        <div className="w-[375px] mx-auto md:w-full flex justify-between">
          <button
            className="text-coolGray hover:text-marineBlue font-[500]"
            onClick={() => setCurrentStep(1)}
          >
            Go Back
          </button>
          <button
            className="bg-marineBlue text-White py-3 px-5 rounded-md text-sm hover:opacity-90 font-[500]"
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};
export default SelectPlan;
