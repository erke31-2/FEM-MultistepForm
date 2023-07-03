import { useState } from "react";
import { addOnHeading } from "../../../constants/FormHeadings";
import useFormStore from "../../../store/useFormStore";
import FormHeader from "../../FormHeader";

import AddOnComponent from "./AddOnComponent";

const SelectAddOns = () => {
  const { addOns, selectedAddOns } = useFormStore(
    (state) => state.selectAddons
  );
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);
  const [error, setError] = useState("");
  const handleNextStep = () => {
    if (selectedAddOns.length <= 0) {
      setError("Please pick at least one add-on for better gaming!");
    } else {
      setCurrentStep(4);
    }
  };
  return (
    <>
      <div className="flex flex-col px-6 py-8 bg-White w-[375px] md:w-full absolute -top-[82px] md:top-0 md:relative rounded-lg gap-4 shadow-md shadow-coolGray md:shadow-none">
        <FormHeader {...addOnHeading} />
        {error && <span className="text-sm text-strawberryRed font-[500]">{error}</span>}
        <ul className="flex flex-col gap-3">
          {addOns.map((addOn) => (
            <AddOnComponent key={addOn.title} addOn={addOn} />
          ))}
        </ul>
      </div>
      <div className="w-full md:px-8 absolute bottom-0 md:relative bg-White py-4 shadow-sm shadow-lightGray md:shadow-none">
        <div className="w-[375px] mx-auto md:w-full flex justify-between">
          <button
            className="text-coolGray hover:text-marineBlue font-[500]"
            onClick={() => setCurrentStep(2)}
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
export default SelectAddOns;
