import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Search from "./Components/Search";
import Jobs from "./Components/Jobs";
import SavedPage from "./Components/SavedPage";

function Home({ savedJobs, setSavedJobs }) {
  const api = "/api/jobs/api?q=react&limit=20";
const [filters, setFilters] = useState({
    search: "",
    location: "",
    experience: "",
    type: "",
  });

  return (
    <>
      <Heading />

      <Search
        filters={filters}
        setFilters={setFilters}
        apii={api}
      />

      <Jobs
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
        filters={filters}
        apii={api}
      />
    </>
  );
}

function App() {
  const [savedJobs, setSavedJobs] = useState([]);

  return (
    <div>
      <Header savedJobs={savedJobs}  />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              savedJobs={savedJobs}
              setSavedJobs={setSavedJobs}
            />
          }
        />

        <Route
          path="/saved"
          element={<SavedPage savedJobs={savedJobs} setSavedJobs={setSavedJobs}/>}
        />
      </Routes>
    </div>
  );
}

export default App;