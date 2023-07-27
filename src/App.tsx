import React from "react";

import Modal from "./components/create-job-form";
import Job from "./components/jobs/job";

function App() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="block">
          <Modal />
          <Job />
        </div>
      </div>
    </div>
  );
}

export default App;
