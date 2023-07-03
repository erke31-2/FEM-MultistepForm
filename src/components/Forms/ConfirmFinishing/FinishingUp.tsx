import { finishingUpHeading } from "../../../constants/FormHeadings";
import useFormStore from "../../../store/useFormStore";
import FormHeader from "../../FormHeader";

const FinishingUp = () => {
  const setCurrentStep = useFormStore((state) => state.setCurrentStep)
  const setIsShowThankYou = useFormStore((state) => state.setIsShowThankYou)
  const selectedPlan = useFormStore((state) => state.selectPlan.selectedPlan);
  const selectedAddOns = useFormStore(
    (state) => state.selectAddons.selectedAddOns
  );
  const isMonthly = useFormStore((state) => state.isMonthly);
  
  const getTotalBilling = () => {
    let total = 0;
    if(selectedPlan){
      total += isMonthly ? selectedPlan?.billing.monthly : selectedPlan?.billing.yearly
    }
    selectedAddOns.forEach(addOn => {
      total += isMonthly ? addOn.billing.monthly : addOn.billing.yearly
    })
    return isMonthly ? `$${total}/mo` : `$${total}/yr`
   
  }
  const totalBilling = getTotalBilling();
  return (
    <>
      <div className="flex flex-col px-6 py-8 bg-White w-[375px] md:w-full absolute -top-[82px] md:top-0 md:relative rounded-lg gap-4 shadow-md shadow-coolGray md:shadow-none">
        <FormHeader {...finishingUpHeading} />
        <ul className="bg-magnolia rounded-md px-4 py-6 flex flex-col gap-3 text-coolGray">
          <li className="flex justify-between items-center border-b-2 border-lightGray pb-4">
            <div>
              <h2 className="font-[500] text-marineBlue">
                {selectedPlan?.title} ({isMonthly ? "Monthly" : "Yearly"})
              </h2>
              <button className="underline text-coolGray hover:text-purplishBlue" onClick={() => setCurrentStep(2)}>
                Change
              </button>
            </div>
            <span className="font-[500] text-marineBlue">
              {isMonthly ? `$${selectedPlan?.billing.monthly}/mo` : `$${selectedPlan?.billing.yearly}/yr`}
            </span>
          </li>
          {selectedAddOns.map((addOn) => (
            <li className="flex justify-between">
              <h2>{addOn.title}</h2>
              <span className="font-[500] text-marineBlue">
                {isMonthly ? `+$${addOn.billing.monthly}/mo` : `+$${addOn.billing.yearly}/yr`}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between p-4">
          <h3 className="text-coolGray">Total ({isMonthly ? "per month" : "per year"})</h3>
          <span className="font-bold text-purplishBlue">{totalBilling}</span>
        </div>
      </div>
      <div className="w-full md:px-8 absolute bottom-0 md:relative bg-White py-4 shadow-sm shadow-lightGray md:shadow-none">
        <div className="w-[375px] mx-auto md:w-full flex justify-between">
          <button className="text-coolGray hover:text-marineBlue font-[500]" onClick={() => setCurrentStep(3)}>
            Go Back
          </button>
          <button className="bg-purplishBlue text-White py-3 px-6 rounded-md text-sm hover:opacity-90 font-[500]" onClick={setIsShowThankYou}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};
export default FinishingUp;
