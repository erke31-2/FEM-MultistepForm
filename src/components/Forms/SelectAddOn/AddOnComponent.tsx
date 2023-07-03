import { AddOn } from "../../../constants/AddOns";
import useFormStore from "../../../store/useFormStore";

interface AddOnComponentProp {
  addOn: AddOn;
}

const AddOnComponent: React.FC<AddOnComponentProp> = ({ addOn }) => {
  const { selectedAddOns, toggleSelectedAddOns } = useFormStore(
    (state) => state.selectAddons
  );
  const isSelectedAddOn = selectedAddOns.includes(addOn)
  const isMonthly = useFormStore((state) => state.isMonthly);
  const billingAmount = isMonthly
    ? `+$${addOn.billing.monthly}/mo`
    : `+$${addOn.billing.yearly}/yr`;

  return (
    <li className={`flex items-center justify-between border-2 border-lightGray rounded-md px-3 py-4 hover:border-purplishBlue cursor-pointer ${isSelectedAddOn && "border-purplishBlue"}`} 
      onClick={() => toggleSelectedAddOns(addOn)}>
      <div className="flex items-center gap-4">
        <div className={`w-5 h-5 border-lightGray border rounded-[4px] ${isSelectedAddOn && "bg-purplishBlue"}`}>
          {isSelectedAddOn && <div className="bg-checkMark w-full h-full bg-no-repeat bg-center" />} 
        </div>
        <div>
          <h2 className="font-[500] text-marineBlue">{addOn.title}</h2>
          <p className="text-sm text-coolGray">{addOn.description}</p>
        </div>
      </div>
      <span className="text-purplishBlue text-sm font-[500]">
        {billingAmount}
      </span>
    </li>
  );
};
export default AddOnComponent;
