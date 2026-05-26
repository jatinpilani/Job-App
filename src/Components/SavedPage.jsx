import React from "react";

function SavedPage({ savedJobs, setSavedJobs }) {

  const removeJob = (job) => {
    setSavedJobs(
      savedJobs.filter((j) => j.id !== job.id)
    );
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 mt-6">

      {savedJobs.length === 0 ? (
        <p className="text-center text-gray-500">
          No saved jobs
        </p>
      ) : (
        savedJobs.map((job, index) => (
          <div
            key={job.id || index}
            className="bg-white border rounded-3xl p-5 hover:shadow-xl transition"
          >
            {/* TOP */}
            <div className="flex justify-between gap-6">

              {/* LEFT */}
              <div className="flex gap-4">

                <img
                  src={job.companyLogo}
                  className="w-14 h-14 rounded-xl"
                  alt=""
                />

                <div>
                  <h2 className="text-xl font-bold">
                    {job.title}
                  </h2>

                  <p className="text-gray-500">
                    {job.companyName}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {Array.isArray(job.locationRestrictions)
                      ? job.locationRestrictions.join(", ")
                      : job.locationRestrictions || "Remote"}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {job.categories?.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <button
                  onClick={() => removeJob(job)}
                  className="text-2xl"
                >
                  ⭐
                </button>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-5 flex justify-between items-center">

              <p className="text-indigo-600 font-bold">
                {job.minSalary && job.maxSalary
                  ? `$${job.minSalary} - $${job.maxSalary}`
                  : "Not Disclosed"}
              </p>

              <a href={job.applicationLink}>
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Apply Now
                </button>
              </a>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedPage;