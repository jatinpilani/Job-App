import React from "react";

function Search() {
  return (
    <div className="w-full  py-6 px-4">
      <div className="max-w-5xl mx-auto bg-white  rounded-2xl p-6 ">
        
        <div className="mb-5">
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            className="w-full px-5 py-4 text-gray-700 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm"
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <select
            id="alllocation"
            name="alllocation"
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
          >
            <option value="">Select Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>

          <select
            id="allroles"
            name="allroles"
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
          >
            <option value="">Select Role</option>
            <option value="data">Data Analyst</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
          </select>

          <select
            id="alltype"
            name="alltype"
            className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
          >
            <option value="">Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200 shadow-md">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;