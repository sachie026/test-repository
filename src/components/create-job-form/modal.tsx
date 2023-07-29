import React, { useState } from "react";
import axios from "axios";

import Step1 from "./step1";
import Step2 from "./step2";
import { JobProps } from "../jobs/job";
import { ENDPOINT } from "../../utils/constant";
import { ErrorObj, step1Validation } from "../../utils/utility-methods";

interface Props {
  showModal: boolean;
  updateModal: () => void;
  data?: JobProps;
  editMode?: boolean;
  getJobs: () => void;
  updatedData?: (data: JobProps) => void;
}

function Modal({ showModal, updateModal, data, getJobs, updatedData }: Props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepError, setStepError] = useState(false);
  const [stepErrorMsg, setStepErrorMsg] = useState("");

  const [endpointData, setEndpointData] = useState<JobProps>({
    title: data ? data.title : "",
    industry: data ? data.industry : "",
    company: data ? data.company : "",
    location: data ? data.location : "",
    type: data ? data.type : "",
    minexp: data ? data.minexp : "",
    maxexp: data ? data.maxexp : "",
    minsal: data ? data.minsal : "",
    maxsal: data ? data.maxsal : "",
    employeecnt: data ? data.employeecnt : "",
    applytype: data ? data.applytype : "",
  });

  const updateCurrentStep = (index: number) => {
    if (index === 2) {
      const validationResult: ErrorObj = step1Validation(endpointData);
      if (validationResult.isValid) {
        setCurrentStep(index);
        setStepError(false);
      } else {
        setStepError(true);
        setStepErrorMsg(validationResult.msg);
      }
    }
  };

  const createJob = () => {
    axios.post(ENDPOINT, { ...endpointData }).then((response) => {
      if (response.status === 201) {
        getJobs();
        updateModal();
      }
    });
  };

  const updateJob = async () => {
    let id = data ? data.id : "";
    await axios
      .put(`${ENDPOINT}/${id}`, {
        ...endpointData,
      })
      .then((response) => {
        if (response.status === 200) {
          updatedData && updatedData(response.data);
          updateModal();
        }
      });
  };

  const updateTheField = (key: string, val: string) => {
    const temp: JobProps = { ...endpointData };
    temp[key as keyof JobProps] = val;
    setEndpointData({ ...temp });
  };

  const onSave = async () => {
    setStepError(false);

    if (data && data.id) {
      await updateJob();
    } else {
      await createJob();
    }
  };

  return (
    <div
      id="modal-container"
      className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-75 items-center"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.currentTarget.id === "modal-container") {
          updateModal();
        }
      }}
    >
      <div
        id="modal-wrapper"
        className="relative w-2/4 my-6 mx-auto max-w-3xl "
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
        }}
      >
        <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-superWhite">
          {showModal && currentStep === 1 && (
            <Step1
              updateCurrentStep={updateCurrentStep}
              data={endpointData}
              updateTheField={updateTheField}
              isError={stepError}
              errorMsg={stepErrorMsg}
            />
          )}
          {showModal && currentStep === 2 && (
            <Step2
              onSave={onSave}
              data={endpointData}
              updateTheField={updateTheField}
              isError={stepError}
              errorMsg={stepErrorMsg}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
