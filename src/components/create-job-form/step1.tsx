import React from "react";

import Header from "./header";
import Input from "../input-with-label/input";
import Footer from "./footer";
import {
  COMPANY_NAME_LABEL,
  COMPANY_NAME_PLACEHOLDER,
  CREATE_JOB_TITLE,
  INDUSTRY_LABEL,
  INDUSTRY_PLACEHOLDER,
  JOB_TITLE_LABEL,
  JOB_TITLE_PLACEHOLDER,
  LOCATION_LABEL,
  LOCATION_PLACEHOLDER,
  NEXT_LABEL,
  RTYPE_LABEL,
  RTYPE_PLACEHOLDER,
  STEP1_LABEL,
} from "../../utils/constant";
import { JobProps } from "../jobs/job";

interface Props {
  updateCurrentStep: (index: number) => void;
  data: JobProps;
  updateTheField: (key: string, val: string) => void;
  isError: boolean;
  errorMsg: string;
}

function Step1({
  updateCurrentStep,
  data,
  updateTheField,
  isError,
  errorMsg,
}: Props) {
  const { title, industry, company, location, type } = data;
  return (
    <>
      <Header title={CREATE_JOB_TITLE} subTitle={STEP1_LABEL} />
      <div>
        <Input
          text={JOB_TITLE_LABEL}
          placeholder={JOB_TITLE_PLACEHOLDER}
          value={title}
          fieldKey="title"
          changeHandler={updateTheField}
          isRequired
        />
        <Input
          text={COMPANY_NAME_LABEL}
          placeholder={COMPANY_NAME_PLACEHOLDER}
          value={company}
          fieldKey="company"
          changeHandler={updateTheField}
          isRequired
        />
        <Input
          text={INDUSTRY_LABEL}
          placeholder={INDUSTRY_PLACEHOLDER}
          value={industry}
          fieldKey="industry"
          changeHandler={updateTheField}
          isRequired
        />
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Input
          text={LOCATION_LABEL}
          placeholder={LOCATION_PLACEHOLDER}
          value={location}
          fieldKey="location"
          changeHandler={updateTheField}
          wrap
        />
        <Input
          text={RTYPE_LABEL}
          placeholder={RTYPE_PLACEHOLDER}
          value={type}
          fieldKey="type"
          changeHandler={updateTheField}
          wrap
        />
      </div>

      <Footer
        buttonLabel={NEXT_LABEL}
        buttonHandler={updateCurrentStep}
        leftPaneMsg={isError ? errorMsg : ""}
      />
    </>
  );
}

export default Step1;
