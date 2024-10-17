"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type InputProps = {
  id: string;
  label?: string;
  isFilled?: boolean;
  setIsFilled?: (value: boolean) => void;
  type?: string;
  error?: string;
  register: () => void;
};

const Input = ({
  id,
  label,
  isFilled,
  setIsFilled,
  type = "text",
  error,
  register,
}: InputProps) => {
  return (
    <div className="relative">
      <div>
        <input
          {...register}
          type={type}
          id={id}
          className="px-6 w-64 sm:w-72 py-3 rounded-full border border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1"
          onFocus={() => setIsFilled && setIsFilled(true)}
          onBlur={(e) => setIsFilled && setIsFilled(e.target.value !== "")}
        />
        <span></span>
      </div>

      {label && (
        <label
          htmlFor={id}
          className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isFilled ? "-left-24" : "left-6  text-xs"
          } text-gray-500`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

const Gender = ["male", "female"];

export default function FormAction() {
  const { register } = useForm();
  const [firstNameFilled, setFirstNameFilled] = useState<boolean>(false);
  const [lastNameFilled, setLastNameFilled] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [gender, setGender] = useState<string>("Choose your gender");
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const setQueryParam = () => {
      const params = new URLSearchParams(searchParams);
      params.set("step", String(step));

      router.push(`/signup?${params.toString()}`);
    };

    setQueryParam();
  }, [step, searchParams, router]);

  function handleClickNext() {
    if (step <= 4) setStep((step) => step + 1);
  }

  function handleClickPrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <div className="p-8 sm:basis-3/5 w-full bg-slate-50 flex flex-col justify-center items-center gap-y-10">
      <div className="text-center">
        <h1 className="text-4xl mb-2 font-bold text-slate-800">Sign up</h1>
        <p className="text-slate-400">Create a new account</p>
      </div>
      <div className="min-h-32 flex justify-center items-center">
        <form>
          <div className="flex flex-col gap-y-5">
            {step === 1 && (
              <>
                {/* First Name */}
                <Input
                  register={{
                    ...register("first-name", {
                      required: "This field is required",
                    }),
                  }}
                  id="first-name"
                  label="First Name"
                  isFilled={firstNameFilled}
                  setIsFilled={setFirstNameFilled}
                />

                {/* Last Name */}
                <Input
                  register={{
                    ...register("last-name", {
                      required: "This field is required",
                    }),
                  }}
                  id="last-name"
                  label="Last Name"
                  isFilled={lastNameFilled}
                  setIsFilled={setLastNameFilled}
                />
              </>
            )}

            {step === 2 && (
              <>
                <div className="relative">
                  <div
                    onClick={() => setIsClicked((clicked) => !clicked)}
                    aria-label="choose gender"
                    {...register("gender")}
                    className="relative px-6 w-64 sm:w-72 py-3 rounded-full border border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1 cursor-pointer appearance-none text-slate-800"
                  >
                    <span>{gender}</span>
                    {isClicked && (
                      <ul className="absolute z-50 divide-y divide-slate-100 bg-slate-300 w-full top-12 rounded-lg right-0  shadow-lg">
                        {Gender.map((item) => (
                          <li
                            key={item}
                            value={item}
                            className="p-3 capitalize transition-colors duration-300 ease-in-out hover:bg-slate-200 text-slate-800 rounded-md px-4"
                            onClick={(e) => {
                              const target = e.target as HTMLLIElement;
                              setGender(target.getAttribute("value") || "");
                            }}
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
                </div>
                {/* Birthdate Input */}
                <Input
                  register={{
                    ...register("birthdate", {
                      required: "This field is required",
                    }),
                  }}
                  id="birthdate"
                  type="date"
                />
              </>
            )}

            {step === 3 && <Input type="email" id="email" label="Email" />}

            {step === 4 && (
              <>
                <Input type="password" id="password" label="Password" />
                <Input type="password" id="password" label="Confirm Password" />
              </>
            )}
          </div>
        </form>
      </div>
      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={handleClickPrevious}
          className="px-4 py-2 rounded-lg text-sm disabled:cursor-not-allowed text-slate-800 bg-transparent border border-slate-300"
          disabled={step < 2}
        >
          Previous &#8592;
        </button>
        {step !== 4 ? (
          <>
            <button
              type="button"
              onClick={handleClickNext}
              disabled={step >= 4}
              className="px-4 py-2 rounded-lg text-sm disabled:cursor-not-allowed text-slate-800 bg-transparent border border-slate-300"
            >
              Next &#8594;
            </button>
          </>
        ) : (
          <button
            type="submit"
            onClick={handleClickPrevious}
            className="px-4 py-2 rounded-lg text-sm disabled:cursor-not-allowed text-slate-800 bg-transparent border border-slate-300"
            disabled={step < 2}
          >
            Submit
          </button>
        )}
      </div>

      <ul className="flex justify-between gap-2 items-center mt-10 w-64 sm:w-[320px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className={`${
              index < step ? "bg-rose-500" : "bg-slate-400"
            } h-1 rounded-lg basis-1/5`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
