"use client";
import { useState } from "react";
import Form from "./Form";
import Steps from "@/app/_components/CreateSteps";

export default function FormAction() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <div className="p-8 sm:basis-3/5 w-full bg-slate-50 flex flex-col justify-center items-center gap-y-10">
      <div className="text-center">
        <h1 className="text-4xl mb-2 font-bold text-slate-800">Sign up</h1>
        <p className="text-slate-400">Create a new account</p>
      </div>
      <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Create Steps */}
      <div>
        <Steps currentStep={currentStep + 1} numberOfSteps={4} />
      </div>
    </div>
  );
}
