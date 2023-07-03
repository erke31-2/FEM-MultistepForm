
import { Plan } from "../../../constants/Plans";
import useFormStore from "../../../store/useFormStore";

interface PlanComponentProps {
  plan: Plan;
}

const PlanComponent: React.FC<PlanComponentProps> = ({ plan }) => {
    const {selectedPlan, setSelectedPlan} = useFormStore((state) => state.selectPlan)
    const isMonthly = useFormStore((state) => state.isMonthly)
    const billingAmount = isMonthly ? `$${plan.billing.monthly}/mo` : `$${plan.billing.yearly}/yr`
  return (
    <li className={`${selectedPlan === plan && "border-purplishBlue"} text-marineBlue col-span-3 border-2 h-[100px] md:h-[180px] border-lightGray rounded-md px-4 gap-4 hover:border-purplishBlue cursor-pointer flex items-center md:col-span-1 md:flex-col md:items-start md:justify-between md:py-6`} 
    onClick={() => setSelectedPlan(plan)}>
      <img src={plan.img} alt={plan.title} />
      <div>
        <h2 className="font-[500]">{plan.title}</h2>
        <p className="text-coolGray">{billingAmount}</p>
        {!isMonthly && <p className="text-sm truncate">2 months free</p>}
      </div>
    </li>
  );
};
export default PlanComponent;
