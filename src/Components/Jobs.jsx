import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs({ savedJobs, setSavedJobs,apii , filters}){
   const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(false);
  const api = apii;

  const fetchApi = async () => {
  setLoading(true);

  try {
    const res = await axios.get(api);
    setJobs(res.data.jobs || []);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  } finally {
    setLoading(false); 
  }
};
const filteredJobs = jobs.filter((job) => {
  const matchesSearch =
    job.title
      ?.toLowerCase()
      .includes(filters.search.toLowerCase()) ||
    job.companyName
      ?.toLowerCase()
      .includes(filters.search.toLowerCase());

  const matchesLocation =
    filters.location === "" ||
    job.locationRestrictions?.includes(filters.location);

  const matchesExperience =
    filters.experience === "" ||
    job.seniority?.includes(filters.experience);

  const matchesType =
    filters.type === "" ||
    job.employmentType === filters.type;

  return (
    matchesSearch &&
    matchesLocation &&
    matchesExperience &&
    matchesType
  );
});
  useEffect(() => {
    fetchApi();
  }, [api]);

  const saveJob = (job) => {
    console.log()
    const exists = savedJobs.some((j) => j.companyName === job?.companyName);

    if (exists) {
      setSavedJobs(savedJobs.filter((j) => j.companyName !== job?.companyName));
    } else {
      setSavedJobs([...savedJobs, job]);
    }
  };
  if (loading) {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-10">

      <div className="max-w-7xl mx-auto mb-8">


        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Find the opportunities
        </p>
      </div>

     <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">

  {filteredJobs.length === 0 ? (
    <div className="bg-white rounded-3xl p-10 text-center shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-800">
        No Jobs Found
      </h2>

      <p className="text-gray-500 mt-3">
        Try changing your search or filters.
      </p>
    </div>
  ) : (
    filteredJobs.map((job, index) => (
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
                  <span className="text-black text-xl sm:text-2xl font-bold ">
                    <img src={job.companyLogo}  />
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

  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.categories.map(element =>(
                    <span key={element} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium">
                      {element}
                    </span>
                    ))}

                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4">
                {/* SAVE BUTTON */}
                <button onClick={() => saveJob(job)} className="w-11 h-11 rounded-xl border border-gray-200 flex items-center cursor-pointer justify-center text-gray-500 hover:bg-black hover:text-white transition">
                 {savedJobs.some((j) => j.companyName === job.companyName) ? "⭐" : "☆"}
                </button>


               
              </div>
            </div>

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

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <a  href={job.applicationLink}> <button className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                  Apply Now
                </button></a>
              </div>
            </div>
          </div>
             ))
      )}
    </div>
    </div>
  );
}

export default Jobs;