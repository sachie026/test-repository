import React, { useState } from "react";

import Step1 from "./step1";
import Step2 from "./step2";

function Modal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const updateModal = () => {
    setShowModal(!showModal);
  };

  const updateCurrentStep = (index: number) => {
    setCurrentStep(index);
  };

  const onSave = () => {
    setShowModal(false);
    setCurrentStep(1);
  };

  return (
    <>
      <button
        className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={updateModal}
      >
        Create job
      </button>

      {showModal && currentStep === 1 && (
        <Step1 updateCurrentStep={updateCurrentStep} />
      )}
      {showModal && currentStep === 2 && <Step2 onSave={onSave} />}
    </>
  );
}

export default Modal;
