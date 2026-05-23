import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Search from "./Components/Search";
import Jobs from "./Components/Jobs";
import SavedPage from "./Components/SavedPage";

function Home() {
  return (
    <>
      <Heading />
      <Search />
      <Jobs />
    </>
  );
}



function Applications() {
  return <div className="p-6 text-xl">Applications Page</div>;
}

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </div>
  );
}

export default App;