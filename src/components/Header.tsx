import steps from "../constants/Steps";
import StepComponent from "./StepComponent";


const Header = () => {
   
  return (
    <aside className="w-full bg-mobileBg h-[200px] md:w-[30%] md:bg-desktopBg md:h-full bg-no-repeat bg-cover bg-center md:rounded-xl">
      <nav className="max-w-[250px] mx-auto">
        <ul className="w-full h-full flex items-center py-10 justify-around text-White md:flex-col md:justify-center md:items-start md:px-6 md:gap-8">
          {steps.map((step) => (
            <StepComponent key={step.stepNo} {...step}/>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Header;
