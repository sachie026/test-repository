import React from "react";

function Job() {
  return (
    <div className="grid  mb-6 md:grid-cols-2 px-6 py-4 border border-border bg-superWhite rounded-lg">
      <label className="block mb-2 text-xl font-light text-gray-900 dark:text-white text-left">
        <div className="grid grid-flow-col auto-cols-max">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
            alt="company-logo"
            width={48}
            className="mr-2"
          />

          <div>
            <div>UX UI Designer</div>
            <div>Company name - Industry</div>
            <div>Location - Remote type</div>

            <div>Part-time (9.00am - 5.00pm IST)</div>
            <div>Experience (1 - 2 years)</div>
            <div>INR (R) 30,000 - 50,000 / month</div>
            <div>51-200 employees</div>

            <button
              type="submit"
              // onClick={() => updateCurrentStep(2)}
              className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply now
            </button>
          </div>
        </div>
      </label>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right">
        Empty space
      </label>
    </div>
  );
}

export default Job;
