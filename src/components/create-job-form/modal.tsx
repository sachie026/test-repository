import React, { useState } from "react";
// import axios from "axios";

import Step1 from "./step1";
import Step2 from "./step2";

// import { ENDPOINT } from "../../utils/constant";

interface Props {
  showModal: boolean;
  updateModal: () => void;
}

function Modal({ showModal, updateModal }: Props) {
  const [currentStep, setCurrentStep] = useState(1);

  const updateCurrentStep = (index: number) => {
    setCurrentStep(index);
  };

  const onSave = () => {
    updateModal();
    setCurrentStep(1);
  };

  //   function createPost() {
  //     axios
  //       .post(ENDPOINT, {
  //         title: "Hello World!",
  //         body: "This is a new post.",
  //       })
  //       .then((response) => {
  //         // setPost(response.data);
  //       });
  //   }

  return (
    <div className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-75 items-center">
      <div className="relative w-2/4 my-6 mx-auto max-w-3xl ">
        <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-superWhite">
          {showModal && currentStep === 1 && (
            <Step1 updateCurrentStep={updateCurrentStep} />
          )}
          {showModal && currentStep === 2 && <Step2 onSave={onSave} />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
