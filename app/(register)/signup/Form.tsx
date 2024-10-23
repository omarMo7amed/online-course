import { useForm, FormProvider } from "react-hook-form";
import FormButton from "./FormButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { AnimatePresence, motion } from "framer-motion";

const SignUpForm = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}) => {
  const methods = useForm();

  const steps = [
    <Step1 key={1} />,
    <Step2 key={2} />,
    <Step3 key={3} />,
    <Step4 key={4} />,
  ];

  const handleNext = async () => {
    //trigger to check any error exist or not
    const isStepValid = await methods.trigger();
    if (isStepValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = (data: unknown) => {
    console.log("Form Submitted", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="min-h-44 flex flex-col justify-between">
          <div className="flex flex-col items-center gap-y-5 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center gap-y-5 justify-center"
              >
                {steps[currentStep]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Buttons for Navigation */}
          <div className="flex gap-4 justify-center mt-6">
            {currentStep > 0 && (
              <FormButton type="button" onClick={handleBack}>
                Back
              </FormButton>
            )}
            {currentStep < steps.length - 1 ? (
              <FormButton type="button" onClick={handleNext}>
                Next
              </FormButton>
            ) : (
              <FormButton type="submit">Submit</FormButton>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default SignUpForm;