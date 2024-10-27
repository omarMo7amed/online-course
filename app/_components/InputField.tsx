/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps = {
  id: string;
  placeholder?: string;
  type?: string;
  error?: any;
  register: any;
  validation: object;
};

export const Input = ({
  id: name,
  placeholder,
  type = "text",
  error,
  register,
  validation,
}: InputProps) => {
  return (
    <div>
      <input
        {...register(name, validation)}
        type={type}
        placeholder={placeholder}
        id={name}
        className="px-6 w-64 sm:w-72 py-3 rounded-full border border-slate-400 focus:border-none focus:outline-none focus:ring focus:ring-rose-500 transition-all duration-300 ring-offset-1 placeholder:text-sm"
      />

      {/* set error */}
      {error && <p className="text-red-300 text-xs mt-1 px-6">{error}</p>}
    </div>
  );
};
