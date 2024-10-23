import { FieldError, useFormContext } from "react-hook-form";
import { Input } from "@/app/_components/InputField";
import PhoneNumberInput from "@/app/_components/PhoneNumberInput";

export default function Step3() {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Input
        register={register}
        validation={{
          required: "This field is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        }}
        error={errors.email?.message}
        type="email"
        id="email"
        placeholder="Email"
      />

      <PhoneNumberInput
        register={register}
        value={{
          phone: getValues("phoneNumber"),
          country: getValues("currentCountry"),
        }}
        setValue={setValue}
        error={errors.phoneNumber?.message as FieldError}
      />
    </>
  );
}
