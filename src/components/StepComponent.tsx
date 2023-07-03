import { Step } from "../constants/Steps";
import useFormStore from "../store/useFormStore";
const StepComponent: React.FC<Step> = ({ stepNo, stepName, stepInfo }) => {
  const currentStep = useFormStore((state) => state.currentStep);
  return (
    <li className="md:flex md:items-center md:gap-4">
      <div
        className={`w-8 h-8 border border-alabaster rounded-full font-semibold flex justify-center items-center ${
          currentStep === stepNo && "bg-lightBlue text-marineBlue border-none"
        }`}
      >
        {stepNo}
      </div>
      <div className="hidden md:flex md:flex-col">
        <h2 className="text-xs font-thin text-coolGray">{stepName}</h2>
        <p className="font-semibold text-[14px]">{stepInfo}</p>
      </div>
    </li>
  );
};
export default StepComponent;
