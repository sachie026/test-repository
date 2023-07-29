import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "./components/create-job-form";
import JobList from "./components/jobs";
import { CREATE_JOB_TITLE, ENDPOINT } from "./utils/constant";
import { JobProps } from "./components/jobs/job";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getJobs = (showLoading?: boolean) => {
    if (showLoading) {
      setLoading(true);
    }
    axios
      .get(ENDPOINT)
      .then((response) => {
        if (response.status === 200) {
          setJobs([...response.data]);
          setLoading(false);
        }
      })
      .catch((e) => setLoading(false));
  };

  const updateModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getJobs(true);
  }, []);

  return (
    <div className="w-full h-screen flex flex-cols text-center bg-border">
      <div className="grid grid-cols-1 mx-auto h-1/2 p-6 ">
        <div className="mb-6">
          <button
            className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={updateModal}
          >
            {CREATE_JOB_TITLE}
          </button>
        </div>
        <div className="block">
          {showModal && (
            <Modal
              showModal={showModal}
              updateModal={updateModal}
              getJobs={getJobs}
            />
          )}
          {jobs && !loading && <JobList jobs={[...jobs]} getJobs={getJobs} />}

          {loading && "loading..."}
        </div>
      </div>
    </div>
  );
}

export default App;
