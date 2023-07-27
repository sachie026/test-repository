import React from "react";

import Input from "../input-with-label/input";

interface Props {
  updateCurrentStep: (index: number) => void;
}

function Step1({ updateCurrentStep }: Props) {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <label className="block mb-2 text-xl font-light text-gray-900 dark:text-white text-left">
          Create a job
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
          Step 1
        </label>
      </div>
      <div>
        <Input text={"Job title"} placeholder="ex: UX UI Designer" isRequired />
        <Input text={"Company name"} placeholder="ex: Google" isRequired />
        <Input
          text={"Industry"}
          placeholder="ex: Information technology"
          isRequired
        />
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <Input text={"Location"} placeholder="ex. Chennai" />
        </div>
        <div>
          <Input text={"Remote type"} placeholder="ex. In-office" />
        </div>
      </div>
      <div className="flex justify-end mt-24">
        <button
          type="submit"
          onClick={() => updateCurrentStep(2)}
          className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Step1;
