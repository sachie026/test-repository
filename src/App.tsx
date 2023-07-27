import React, { useState } from "react";

import Modal from "./components/create-job-form";
import Job from "./components/jobs/job";
import JobList from "./components/jobs";

function App() {
  const [showModal, setShowModal] = useState(false);
  const updateModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="w-full h-screen flex flex-cols text-center bg-border">
      <div className="grid grid-cols-1 mx-auto h-1/2 p-6 ">
        <div className="mb-6">
          <button
            className="block text-superWhite bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={updateModal}
          >
            Create job
          </button>
        </div>
        <div className="block">
          {showModal && (
            <Modal showModal={showModal} updateModal={updateModal} />
          )}
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default App;
