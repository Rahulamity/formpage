/*eslint_disable*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./screen/Profile";
import AddProfile from "./screen/AddProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact={"*"} element={<Profile />} />
          <Route path="/AddProfile" element={<AddProfile />} />
        </Routes>
      </Router>
    </>
    // <Home/>
  );
}

export default App;
