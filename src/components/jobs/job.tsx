import React, { useState } from "react";

import DeleteIcon from "../../assets/delete";
import EditIcon from "../../assets/edit";
import {
  APPLY_NOW_LABEL,
  EAPPLY_LABEL,
  MB2,
  QAPPLY_KEY,
} from "../../utils/constant";
import InfoRow from "./info-row";
import Modal from "../create-job-form";
import LogoIcon from "../../assets/comp-logo";

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

const EAPPLY_BUTTON_CLASSES = "bg-transparent text-blue border border-blue";
const QAPPLY_BUTTON_CLASSES = "bg-blue text-superWhite";

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
    applytype,
    id,
  } = jobData;

  const jobTimeInfo = `Part-time (9.00am - 5.00pm IST)`;
  const expInfo = `Experience (${minexp} - ${maxexp} years)`;
  const salInfo = `INR (R) ${minsal} - ${maxsal} / month`;
  const empInfo = `${employeecnt || "NA"} employees`;

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
          <LogoIcon />

          <div>
            <div className="mb-6">
              <div className="font-medium text-xl">{title}</div>
              <InfoRow info={`${company} - ${industry}`} />
              <InfoRow info={`${location} - ${type}`} classes="text-gray" />
            </div>

            <div className="mb-6">
              <InfoRow info={jobTimeInfo} classes={MB2} />
              <InfoRow info={expInfo} classes={MB2} />
              <InfoRow info={salInfo} classes={MB2} />
              <InfoRow info={empInfo} classes={MB2} />
            </div>

            <button
              type="submit"
              className={`block  ${
                applytype === QAPPLY_KEY
                  ? QAPPLY_BUTTON_CLASSES
                  : EAPPLY_BUTTON_CLASSES
              } hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5`}
            >
              {applytype === QAPPLY_KEY ? APPLY_NOW_LABEL : EAPPLY_LABEL}
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
