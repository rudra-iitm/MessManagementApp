import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Form from "./pages/formPage";
import Navbar from "./pages/Navbar";
import Login from "./pages/loginPage";
import Home from "./pages/HomePage";
import Signup from "./pages/signupPage";
import GetOTP from "./pages/getOTP";
import Mess from "./pages/MessDetail";
import Cards from "./components/MessCard";
import GiveFeedback from "./pages/GiveFeedback";
import ViewFeedback from "./pages/viewFeedback";
import { StudentsPage } from "./pages/StudentsPage";
import Sidebar from "./pages/sidebar";
import { MessMenu } from "./pages/MessMenu";

function App() {
  // const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="form" element={<Form />} />
            <Route path="signup" element={<Signup />} />
            <Route path="getOTP" element={<GetOTP />} />
            <Route path="mess" element={<Mess />} />
            <Route path="cards" element={<Cards />} />
            <Route path="giveFeedback" element={<GiveFeedback />} />
            <Route path="viewFeedback" element={<ViewFeedback />} />
            <Route path="student" element={<StudentsPage />} />
            <Route path="menu" element={<MessMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
