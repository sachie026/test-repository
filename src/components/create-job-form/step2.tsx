import React from "react";
import Input from "../input-with-label";
import InputBox from "../input-box";
import RadioButton from "../radio-button";
import Header from "./header";
import Footer from "./footer";
import {
  APPLY_LABEL,
  CREATE_JOB_TITLE,
  EAPPLY_LABEL,
  EMPLOYEE_LABEL,
  EMPLOYEE_PLACEHOLDER,
  EXPERIENCE_LABEL,
  MAX_LABEL,
  MIN_LABEL,
  QAPPLY_LABEL,
  SALARY_LABEL,
  SAVE_LABEL,
  STEP2_LABEL,
} from "../../utils/constant";
import { JobProps } from "../jobs/job";

interface Props {
  onSave: () => void;
  data: JobProps;
  updateTheField: (key: string, val: string) => void;
  isError: boolean;
  errorMsg: string;
}

function Step2({ onSave, data, updateTheField }: Props) {
  const { minexp, minsal, maxexp, maxsal, employeecnt } = data;
  return (
    <>
      <Header title={CREATE_JOB_TITLE} subTitle={STEP2_LABEL} />

      <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
        {EXPERIENCE_LABEL}
      </label>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputBox
          type="number"
          placeholder={MIN_LABEL}
          value={minexp}
          fieldKey="minexp"
          changeHandler={updateTheField}
          wrap
        />
        <InputBox
          type="number"
          placeholder={MAX_LABEL}
          value={maxexp}
          fieldKey="maxexp"
          changeHandler={updateTheField}
          wrap
        />
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        {SALARY_LABEL}
      </label>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <InputBox
          type="number"
          placeholder={MIN_LABEL}
          value={minsal}
          fieldKey="minsal"
          changeHandler={updateTheField}
          wrap
        />
        <InputBox
          type="number"
          placeholder={MAX_LABEL}
          value={maxsal}
          fieldKey="maxsal"
          changeHandler={updateTheField}
          wrap
        />
      </div>

      <div className="mb-6">
        <Input
          text={EMPLOYEE_LABEL}
          placeholder={EMPLOYEE_PLACEHOLDER}
          value={employeecnt}
          fieldKey="employeecnt"
          changeHandler={updateTheField}
        />
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        {APPLY_LABEL}
      </label>
      <div className="grid gap-6 mb-6 grid-flow-col auto-cols-max">
        <RadioButton label={QAPPLY_LABEL} />
        <RadioButton label={EAPPLY_LABEL} />
      </div>

      <Footer buttonLabel={SAVE_LABEL} buttonHandler={onSave} />
    </>
  );
}

export default Step2;
