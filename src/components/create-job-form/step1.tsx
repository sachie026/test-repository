import React from "react";
import AsteriskIcon from "../asterisk";

interface Props {
  updateCurrentStep: (index: number) => void;
}

function Step1({ updateCurrentStep }: Props) {
  return (
    <div className="flex justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl ">
        <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <label className="block mb-2 text-xl font-light text-gray-900 dark:text-white text-left">
              Create a job
            </label>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
              Step 1
            </label>
          </div>
          <div className="mb-6">
            <div className="grid grid-flow-col auto-cols-max">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Job title
              </label>
              <AsteriskIcon />
            </div>

            <input
              type="text"
              className="mb-6 bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: UX UI Designer"
              required
            />

            <div className="grid grid-flow-col auto-cols-max">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Company name
              </label>
              <AsteriskIcon />
            </div>

            <input
              type="text"
              className="mb-6 bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: Google"
              required
            />

            <div className="grid grid-flow-col auto-cols-max">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Industry
              </label>
              <AsteriskIcon />
            </div>

            <input
              type="text"
              className="bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: Information technology"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Location
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex. Chennai"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
                Remote type
              </label>
              <input
                type="text"
                className=" bg-gray-50 border border-border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex. In-office"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => updateCurrentStep(2)}
            className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
