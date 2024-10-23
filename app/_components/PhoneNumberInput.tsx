/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useState } from "react";
//to check validation of number
import { parsePhoneNumberFromString } from "libphonenumber-js";
import CountryFlag from "react-country-flag";
import countries from "@/countries.json";
import { FieldError } from "react-hook-form";

type Country = {
  name: string;
  code: string;
  dialCode: string;
};

type PhoneNumberInputProps = {
  register: any;
  value: { phone: string; country: Country };
  error?: FieldError;
  setValue: (name: string, value: unknown) => void;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  register,
  value,
  error,
  setValue,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    value.country || countries[0]
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>(value.phone);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setValue("currentCountry", selectedCountry);
  }, [selectedCountry, setValue]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = e.target.value.replace(/[^\d]/g, "");
    setPhoneNumber(formattedNumber);

    const phoneNumberObj = parsePhoneNumberFromString(
      `+${selectedCountry.dialCode}${formattedNumber}`
    );

    if (phoneNumberObj) {
      const isValidNumber = phoneNumberObj.isValid();
      setIsValid(isValidNumber);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex w-64 sm:w-72 items-center border rounded-full transition-all px-6 duration-300 gap-x-1 ${
          isFocused
            ? "border-rose-500 outline-none ring ring-rose-500"
            : "border-slate-400"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {/* Custom Country Code Dropdown */}
        <div className="w-16">
          <button
            className="flex items-center gap-x-1 border-none bg-transparent text-nowrap focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen((prev) => !prev);
            }}
          >
            <CountryFlag
              countryCode={selectedCountry.code}
              svg
              style={{ width: "1em", height: "1em" }}
            />
            +{selectedCountry.dialCode}
          </button>

          {isDropdownOpen && (
            <ul className="absolute z-10 bg-white border min-w-36 border-slate-400 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {countries.map((country) => (
                <li
                  key={country.code}
                  className="flex items-center cursor-pointer p-2 hover:bg-slate-200"
                  onClick={() => handleCountrySelect(country)}
                >
                  <CountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  {"  "}+ {country.dialCode}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone Number Input */}

        <input
          {...register("phoneNumber", {
            required: "This field is required",
            validate: () => isValid || "Invalid phone number",
          })}
          type="text"
          value={phoneNumber}
          onFocus={() => setIsDropdownOpen(false)}
          onChange={handlePhoneNumberChange}
          placeholder="Phone number"
          className="outline-none py-3 bg-transparent  placeholder:text-sm w-full"
        />
      </div>

      {error && (
        <span className="block text-red-300 text-xs px-6 mt-1">
          {error as ReactNode}
        </span>
      )}
    </div>
  );
};

export default PhoneNumberInput;
