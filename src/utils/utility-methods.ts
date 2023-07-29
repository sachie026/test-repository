import { JobProps } from "../components/jobs/job";

export interface ErrorObj {
  isValid: boolean;
  msg: string;
}

export const step1Validation = (data: JobProps): ErrorObj => {
  let errMsg = "Missing required fields:";
  let isValid = true;

  console.log("step1Validation called");

  if (!data.title.trim()) {
    isValid = false;
    errMsg += " [Job title]";
  }
  if (!data.company.trim()) {
    isValid = false;
    errMsg += " [Company name]";
  }
  if (!data.industry.trim()) {
    isValid = false;
    errMsg += " [Industry]";
  }

  return {
    isValid: isValid,
    msg: errMsg,
  };
};
