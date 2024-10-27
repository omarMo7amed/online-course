import { ReactNode, useEffect, useState } from "react";

import { FieldError, useFormContext } from "react-hook-form";

const GenderOptions = ["male", "female"];

export default function Step2() {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("Choose your gender");

  useEffect(() => {
    setIsClicked(false);
  }, [gender]);

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    setValue("gender", selectedGender);
  };

  return (
    <>
      <div>
        <div className="relative">
          <div
            onClick={() => setIsClicked((clicked) => !clicked)}
            {...register("gender", { required: "This field is required" })}
            aria-label="choose-gender"
            className={`relative px-6 w-64 sm:w-72 py-3 ${
              isClicked ? "ring ring-rose-600 outline-none border-none" : ""
            } transition-all duration-300 rounded-full border border-slate-400 cursor-pointer appearance-none text-slate-800`}
          >
            <span className="text-sm">{getValues("gender") || gender}</span>

            {isClicked && (
              <ul
                className={`absolute z-10 bg-white border min-w-full left-0 border-slate-400 rounded-md shadow-lg max-h-48 overflow-y-auto`}
              >
                {GenderOptions.map((item) => (
                  <li
                    key={item}
                    value={item}
                    className="flex items-center cursor-pointer p-2 hover:bg-slate-200 "
                    onClick={() => handleGenderSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.5 7l4.5 4.5 4.5-4.5h-9z" />
            </svg>
          </div>

          {/* Error message for gender */}
        </div>
        {errors.gender && (
          <span className="text-red-300 px-6 mt-1 text-xs ">
            {(errors.gender as FieldError).message}
          </span>
        )}
      </div>

      {/* Birthdate Input */}
      <div>
        <input
          {...register("birthdate", {
            required: "This field is required",
            validate: {
              isOldEnough: (value: Date) => {
                const today = new Date();
                const birthDate = new Date(value);
                const age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                const dayDiff = today.getDate() - birthDate.getDate();

                if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                  return age - 1 >= 16 || "You must be at least 16 years old";
                }

                return age >= 16 || "You must be at least 16 years old";
              },
            },
          })}
          type="date"
          placeholder="mm / dd / yyyy"
          className="px-6 w-64 sm:w-72 py-3 rounded-full border bg-transparent border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1 cursor-pointer placeholder:text-sm appearance-none"
          id="birthdate"
        />
        {errors.birthdate && (
          <p className="mt-2 text-xs px-6 text-red-300">
            {errors.birthdate?.message as ReactNode}
          </p>
        )}
      </div>
    </>
  );
}
