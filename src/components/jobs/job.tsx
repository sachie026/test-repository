import React from "react";

import DeleteIcon from "../../assets/delete";
import EditIcon from "../../assets/edit";
import { LOGO_SIZE } from "../../utils/constant";

function Job() {
  return (
    <div className="grid mb-6 md:grid-cols-2 px-6 py-4 border border-border bg-superWhite rounded-lg flex">
      <div className="block mb-2 text-xl font-light text-gray-900 text-left">
        <div className="grid grid-flow-col auto-cols-max">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
            alt="company-logo"
            width={LOGO_SIZE}
            className="mr-2"
          />

          <div>
            <div className="mb-6">
              <div className="font-medium text-xl">UX UI Designer</div>
              <div className="font-normal text-base">
                Company name - Industry
              </div>
              <div className="font-normal text-base text-gray">
                Location - Remote type
              </div>
            </div>

            <div className="mb-6">
              <div className="font-normal text-base mb-2">
                Part-time (9.00am - 5.00pm IST)
              </div>
              <div className="font-normal text-base mb-2">
                Experience (1 - 2 years)
              </div>
              <div className="font-normal text-base mb-2">
                INR (R) 30,000 - 50,000 / month
              </div>
              <div className="font-normal text-base mb-2">51-200 employees</div>
            </div>

            <button
              type="submit"
              className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <EditIcon mr="mr-4" />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default Job;
