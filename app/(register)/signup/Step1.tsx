import { useFormContext } from "react-hook-form";
import { Input } from "@/app/_components/InputField";

export default function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {/* First Name */}
      <Input
        register={register}
        validation={{
          required: "This field is required",
        }}
        id="firstName"
        placeholder="First Name"
        error={errors.firstName?.message}
      />

      {/* Last Name */}
      <Input
        register={register}
        validation={{
          required: "This field is required",
        }}
        id="lastName"
        placeholder="Last Name"
        error={errors.lastName?.message}
      />
    </>
  );
}
