import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const api = "/api/jobs/api?q=react&limit=20";

  const fetchApi = async () => {
    try {
      const res = await axios.get(api);
      setJobs(res.data.jobs || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-8">


        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Find the opportunities
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
        {jobs.map((job, index) => (
          <div
            key={job.id || index}
            className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              {/* LEFT */}
              <div className="flex gap-4">
                {/* LOGO */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl  flex items-center justify-center ">
                  <span className="text-white text-xl sm:text-2xl font-bold">
                    <img src={job.companyLogo} alt="" />
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
                    {job.title}
                  </h2>

                  <p className="text-gray-500 text-sm sm:text-base mt-1">
                    {job.companyName}
                  </p>

                  <p className="text-gray-400 text-sm mt-1">
                    {Array.isArray(job.locationRestrictions)
                      ? job.locationRestrictions.join(", ")
                      : job.locationRestrictions || "Remote"}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.categories.map(element =>(
                    <span key={element} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium">
                      {element}
                    </span>
                    ))}

                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4">
                {/* SAVE BUTTON */}
                <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
                  </svg>
                </button>


               
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
         
              <div>
                <p className="text-lg font-bold text-indigo-600">
                  {job.minSalary && job.maxSalary
  ? `$${job.minSalary} - $${job.maxSalary}`
  : "Not Disclosed"}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Estimated salary range
                </p>
              </div>

              {/* META */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <a  href={job.applicationLink}> <button className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                  Apply Now
                </button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;