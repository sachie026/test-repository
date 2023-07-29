import React, { useState } from "react";
import axios from "axios";

import Job, { JobProps } from "./job";
import { ENDPOINT } from "../../utils/constant";
import Loader from "../../assets/loader";

interface Props {
  jobs: JobProps[] | [];
  getJobs: () => void;
}

function JobList({ jobs, getJobs }: Props) {
  const [loading, setLoading] = useState(false);

  const deleteJob = (id: string) => {
    setLoading(true);
    axios
      .delete(`${ENDPOINT}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          getJobs();
        }
        setLoading(false);
      })
      .catch((e) => setLoading(false));
  };

  const reversedJobs = [...jobs.reverse()].reverse();

  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      {loading && <Loader />}
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
