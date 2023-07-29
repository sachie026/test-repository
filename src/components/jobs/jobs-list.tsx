import React from "react";
import axios from "axios";

import Job, { JobProps } from "./job";
import { ENDPOINT } from "../../utils/constant";

interface Props {
  jobs: JobProps[] | [];
  getJobs: () => void;
}

function JobList({ jobs, getJobs }: Props) {
  const deleteJob = (id: string) => {
    axios.delete(`${ENDPOINT}/${id}`).then((response) => {
      if (response.status === 200) {
        getJobs();
      }
    });
  };

  const reversedJobs = [...jobs.reverse()].reverse();

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      {[...reversedJobs].map((job, index) => {
        return (
          <Job
            key={`${job.id}${index}`}
            data={job}
            deleteJob={deleteJob}
            getJobs={getJobs}
          />
        );
      })}
    </div>
  );
}

export default JobList;
