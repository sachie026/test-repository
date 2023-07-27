import React from "react";

interface Props {
  onSave: () => void;
}

function Step2({ onSave }: Props) {
  return (
    <div className="flex justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <label className="block mb-2 text-xl font-light text-gray-900 dark:text-white text-left">
              Create a job
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
              Step 2
            </label>
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Experience
          </label>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Minimum"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className=" bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Maximum"
                required
              />
            </div>
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Salary
          </label>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Minimum"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className=" bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Maximum"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="grid grid-flow-col auto-cols-max">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Total employee
              </label>
            </div>

            <input
              type="text"
              className="bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: 100"
              required
            />
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
                checked
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
          <button
            type="submit"
            onClick={onSave}
            className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
