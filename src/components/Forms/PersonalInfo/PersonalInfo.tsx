import FormHeader from "../../FormHeader";
import { personalInfoHeading } from "../../../constants/FormHeadings";
import useFormStore from "../../../store/useFormStore";
import { PersonalInfoFormFields } from "../../../types/types";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const PersonalInfo = () => {
  const setCurrentStep = useFormStore((state) => state.setCurrentStep);
  const {name, email, phone, setPersonalFields} = useFormStore((state) => state.personalInfo)
  const schema: ZodType<PersonalInfoFormFields> = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().nonempty("Email is required").email(),
    phone: z.string().nonempty("Ph.No is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormFields>({
    resolver: zodResolver(schema),
   defaultValues: {
    name: name,
    email: email,
    phone: phone
   }
  });

  const handleNextStep = (data: PersonalInfoFormFields) => {
    setPersonalFields("name", data.name);
    setPersonalFields("email", data.email);
    setPersonalFields("phone", data.phone);
    setCurrentStep(2);
  };

  return (
    <>
      <div className="flex flex-col px-6 py-8 bg-White w-[375px] md:w-full absolute -top-[82px] md:top-0 md:relative rounded-lg gap-4 shadow-md shadow-coolGray md:shadow-none">
        <FormHeader {...personalInfoHeading} />
        <div className="flex flex-col">
          <div className="justify-between flex items-center">
            <label htmlFor="name" className="text-marineBlue font-[500]">
              Name
            </label>
            {errors.name && (
              <span className="font-[500] text-sm text-strawberryRed">
                {errors.name.message}
              </span>
            )}
          </div>

          <input
            type="text"
            className={`${errors.name && "border-strawberryRed"} border border-lightGray rounded-md py-3  px-4 focus:outline-none placeholder:text-coolGray font-[500] cursor-pointer hover:border-purplishBlue`}
            id="name"
            placeholder="e.g.Stephen King"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <div className="justify-between flex items-center">
            <label htmlFor="email" className="text-marineBlue font-[500]">
              Email Address
            </label>
            {errors.email && (
              <span className="font-[500] text-sm text-strawberryRed">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            type="email"
            className={`${errors.email && "border-strawberryRed"} border border-lightGray rounded-md py-3  px-4 focus:outline-none placeholder:text-coolGray font-[500] cursor-pointer hover:border-purplishBlue`}
            id="email"
            placeholder="e.g.stephenking@lorem.com"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <div className="justify-between flex items-center">
            <label htmlFor="phone" className="text-marineBlue font-[500]">
              Phone Number
            </label>
            {errors.phone && (
              <span className="font-[500] text-sm text-strawberryRed">
                {errors.phone.message}
              </span>
            )}
          </div>
          <input
            type="tel"
            className={`${errors.phone && "border-strawberryRed"} border border-lightGray rounded-md py-3  px-4 focus:outline-none placeholder:text-coolGray font-[500] cursor-pointer hover:border-purplishBlue`}
            id="phone"
            placeholder="e.g.+1 234 567 890"
            {...register("phone")}
          />
        </div>
      </div>
      <div className="w-full md:px-8 absolute bottom-0 md:relative bg-White py-4 shadow-sm shadow-lightGray md:shadow-none">
        <div className="w-[375px] mx-auto md:w-full flex justify-end">
          <button
            className="bg-marineBlue text-White py-3 px-5 rounded-md text-sm hover:opacity-90 font-[500]"
            onClick={handleSubmit(handleNextStep)}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};
export default PersonalInfo;
