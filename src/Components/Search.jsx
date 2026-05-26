import axios from "axios";
import React, { useEffect, useState } from "react";

function Search({ filters, setFilters, apii }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [location, setLocation] = useState([]);

  const api = apii;

  const fetchApi = async () => {
    setLoading(true);

    try {
      const res = await axios.get(api);

      const jobsData = res.data.jobs || [];

      setJobs(jobsData);

      const uniqueTypes = [
        ...new Set(
          jobsData
            .map((job) => job.employmentType)
            .filter(Boolean)
        ),
      ];

      const uniqueExperience = [
        ...new Set(
          jobsData.flatMap((job) => job.seniority || [])
        ),
      ];

      const uniqueLocation = [
        ...new Set(
          jobsData.flatMap(
            (job) => job.locationRestrictions || []
          )
        ),
      ];

      setEmploymentTypes(uniqueTypes);
      setExperienceLevels(uniqueExperience);
      setLocation(uniqueLocation);

    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [api]);

  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow">

        {/* Search Input */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search jobs..."
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            className="w-full px-5 py-4 border rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


          <select
            value={filters.location}
            onChange={(e) =>
              setFilters({
                ...filters,
                location: e.target.value,
              })
            }
            className="w-full px-4 py-3 border rounded-xl"
          >
            <option value="">All Location</option>

            {location.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={filters.experience}
            onChange={(e) =>
              setFilters({
                ...filters,
                experience: e.target.value,
              })
            }
            className="w-full px-4 py-3 border rounded-xl"
          >
            <option value="">All Level</option>

            {experienceLevels.map((exp, index) => (
              <option key={index} value={exp}>
                {exp}
              </option>
            ))}
          </select>

          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({
                ...filters,
                type: e.target.value,
              })
            }
            className="w-full px-4 py-3 border rounded-xl"
          >
            <option value="">All Job Type</option>

            {employmentTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

        </div>


      </div>
    </div>
  );
}

export default Search;