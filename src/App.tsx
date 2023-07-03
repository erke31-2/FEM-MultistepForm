import Header from "./components/Header";
import Form from "./components/Form";
import Confirm from "./components/Forms/ConfirmFinishing/Confirm";
import useFormStore from "./store/useFormStore";

const App = () => {
  const isShowThankYou = useFormStore((state) => state.isShowThankYou);
  return (
    <div className="bg-magnolia w-full h-screen flex justify-center items-center font-Ubuntu">
      <div className="w-full h-full md:w-[768px] md:h-[600px] lg:w-[860px] md:flex md:items-start md:bg-White md:p-4 md:rounded-lg md:shadow-lg md:shadow-coolGray">
        <Header />
        <main className="flex flex-col h-[calc(100vh-200px)] md:h-full md:w-[70%] items-center relative md:justify-between md:py-4 md:px-6">
          {!isShowThankYou ? <Form /> : <Confirm />}
        </main>
      </div>
    </div>
  );
};
export default App;
