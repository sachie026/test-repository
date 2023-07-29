import React, { useState } from "react";

import DeleteIcon from "../../assets/delete";
import EditIcon from "../../assets/edit";
import { APPLY_NOW_LABEL, ENDPOINT, LOGO_SIZE } from "../../utils/constant";
import InfoRow from "./info-row";
import axios from "axios";
import Modal from "../create-job-form";

export interface JobProps {
  title: string;
  company: string;
  industry: string;
  location: string;
  type: string;
  minexp: string;
  maxexp: string;
  minsal: string;
  maxsal: string;
  employeecnt: string;
  applytype: string;
  id?: string;
}

interface Props {
  data: JobProps;
  deleteJob: (id: string) => void;
  getJobs: () => void;
}

function Job({ data, deleteJob, getJobs }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [jobData, setJobData] = useState({ ...data });
  const {
    title,
    industry,
    company,
    location,
    type,
    minexp,
    maxexp,
    minsal,
    maxsal,
    employeecnt,
    id,
  } = jobData;

  const updateModal = () => {
    setShowModal(!showModal);
  };

  const updatedData = (data: JobProps) => {
    setJobData({ ...data });
  };

  return (
    <div className="grid mb-6 md:grid-cols-2 px-6 py-4 border border-border bg-superWhite rounded-lg flex">
      {showModal && (
        <Modal
          showModal={showModal}
          updateModal={updateModal}
          data={jobData}
          getJobs={getJobs}
          updatedData={updatedData}
        />
      )}

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
              <div className="font-medium text-xl">{title}</div>
              <InfoRow info={`${company} - ${industry}`} />
              <InfoRow info={`${location} - ${type}`} classes="text-gray" />
            </div>

            <div className="mb-6">
              <InfoRow
                info={`Part-time (9.00am - 5.00pm IST)`}
                classes="mb-2"
              />
              <InfoRow
                info={`Experience (${minexp} - ${maxexp} years)`}
                classes="mb-2"
              />
              <InfoRow
                info={`INR (R) ${minsal} - ${maxsal} / month`}
                classes="mb-2"
              />
              <InfoRow
                info={`${employeecnt || "NA"} employees`}
                classes="mb-2"
              />
            </div>

            <button
              type="submit"
              className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              {APPLY_NOW_LABEL}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <EditIcon mr="mr-4" clickHandler={updateModal} />
        <DeleteIcon clickHandler={() => deleteJob(id || "")} />
      </div>
    </div>
  );
}

export default React.memo(Job);
