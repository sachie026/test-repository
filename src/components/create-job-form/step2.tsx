import React from "react";
import Input from "../input-with-label";
import InputBox from "../input-box";
import RadioButton from "../radio-button";
import Header from "./header";
import Footer from "./footer";

import {
  APPLY_LABEL,
  CREATE_JOB_TITLE,
  EAPPLY_KEY,
  EAPPLY_LABEL,
  EMPCOUNT_KEY,
  EMPLOYEE_LABEL,
  EMPLOYEE_PLACEHOLDER,
  EXPERIENCE_LABEL,
  MAXEXP_KEY,
  MAXSAL_KEY,
  MAX_LABEL,
  MINEXP_KEY,
  MINSAL_KEY,
  MIN_LABEL,
  QAPPLY_KEY,
  QAPPLY_LABEL,
  SALARY_LABEL,
  SAVE_LABEL,
  STEP2_LABEL,
  APPLY_TYPE_KEY,
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
  const { minexp, minsal, maxexp, maxsal, employeecnt, applytype } = data;
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
          fieldKey={MINEXP_KEY}
          changeHandler={updateTheField}
          wrap
        />
        <InputBox
          type="number"
          placeholder={MAX_LABEL}
          value={maxexp}
          fieldKey={MAXEXP_KEY}
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
          fieldKey={MINSAL_KEY}
          changeHandler={updateTheField}
          wrap
        />
        <InputBox
          type="number"
          placeholder={MAX_LABEL}
          value={maxsal}
          fieldKey={MAXSAL_KEY}
          changeHandler={updateTheField}
          wrap
        />
      </div>

      <div className="mb-6">
        <Input
          text={EMPLOYEE_LABEL}
          placeholder={EMPLOYEE_PLACEHOLDER}
          value={employeecnt}
          fieldKey={EMPCOUNT_KEY}
          changeHandler={updateTheField}
        />
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        {APPLY_LABEL}
      </label>
      <div className="grid gap-6 mb-6 grid-flow-col auto-cols-max">
        <RadioButton
          label={QAPPLY_LABEL}
          value={QAPPLY_KEY}
          fieldKey={APPLY_TYPE_KEY}
          isChecked={applytype === QAPPLY_KEY}
          changeHandler={updateTheField}
        />
        <RadioButton
          label={EAPPLY_LABEL}
          value={EAPPLY_KEY}
          fieldKey={APPLY_TYPE_KEY}
          isChecked={applytype === EAPPLY_KEY}
          changeHandler={updateTheField}
        />
      </div>

      <Footer buttonLabel={SAVE_LABEL} buttonHandler={onSave} />
    </>
  );
}

export default Step2;
