import { useFormContext } from "react-hook-form";
import { ReactNode, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Step4() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  // Toggles for password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <>
      {/* Password Input */}
      <div>
        <div className="relative">
          <input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className="px-6 w-64 sm:w-72 py-3 placeholder:text-sm rounded-full border border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
          />
          {/* Eye icon to toggle password visibility */}
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FiEye className="text-gray-500" size={20} />
            ) : (
              <FiEyeOff className="text-gray-500" size={20} />
            )}
          </div>
        </div>

        {errors.password && (
          <span className="text-red-300 text-xs mt-1 px-6 block">
            {errors.password.message as ReactNode}
          </span>
        )}
      </div>

      {/* Confirm Password Input */}
      <div>
        <div className="relative">
          <input
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value: unknown) =>
                value === password || "Passwords do not match",
            })}
            className="px-6 w-64 sm:w-72 py-3 rounded-full border placeholder:text-sm border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1"
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          {/* Eye icon to toggle confirm password visibility */}
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <FiEye className="text-gray-500" size={20} />
            ) : (
              <FiEyeOff className="text-gray-500" size={20} />
            )}
          </div>
        </div>
        {errors.confirmPassword && (
          <span className="text-red-300 text-xs mt-1 px-6 block">
            {errors.confirmPassword.message as ReactNode}
          </span>
        )}
      </div>
    </>
  );
}
