import React from "react";
import Job from "./job";

function JobList() {
  const arr = new Array(5).fill(0);
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      {arr.map((elem, index) => {
        return <Job key={index} />;
      })}
    </div>
  );
}

export default JobList;
