const Confirm = () => {
  return (
    <div className="flex flex-col px-6 py-8 bg-White w-[375px] md:w-full absolute -top-[82px] md:top-0 md:relative rounded-lg gap-4 shadow-md shadow-coolGray md:shadow-none">
      <div className="w-full h-full flex flex-col justify-center items-center py-16 gap-4">
        <div className="bg-thankYou w-12 h-12 bg-contain" />
        <h2 className="text-2xl font-bold text-marineBlue">Thank you!</h2>
        <p className="text-center px-4 leading-6 text-coolGray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};
export default Confirm;
