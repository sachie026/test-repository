import React from "react";
import BackIcon from "../../assets/back";
import Input from "../input-with-label";
import InputBox from "../input-box";

interface Props {
  onSave: () => void;
}

function Step2({ onSave }: Props) {
  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <label className="block mb-2 text-xl font-light text-gray-900  text-left">
          Create a job
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-right">
          Step 2
        </label>
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
        Experience
      </label>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <InputBox placeholder={"Minimum"} />
        </div>
        <div>
          <InputBox placeholder={"Maximum"} />
        </div>
      </div>

      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        Salary
      </label>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <InputBox placeholder={"Minimum"} />
        </div>
        <div>
          <InputBox placeholder={"Maximum"} />
        </div>
      </div>

      <div className="mb-6">
        <Input text={"Total employee"} placeholder="ex: 100" />
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900  text-left">
        Apply type
      </label>
      <div className="grid gap-6 mb-6 grid-flow-col auto-cols-max">
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue bg-gray border-border focus:ring-blue  focus:ring-2"
          />
          <label className="ml-2 text-sm font-light text-gray">
            Quick apply
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue bg-gray border-border focus:ring-blue  focus:ring-2"
          />
          <label className="ml-2 text-sm font-light text-gray">
            External apply
          </label>
        </div>
      </div>
      <div className="grid gap-6 mt-24 mb-6 md:grid-cols-2">
        <div className="flex items-center">
          <BackIcon />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={onSave}
            className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Step2;
