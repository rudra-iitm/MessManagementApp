/* eslint-disable react/prop-types */

import { Filter } from "../components/Filter";
import StudentCard2 from "../components/StudentCard2";
import StudentCard from "../components/StudentCard";
import { getToken } from "../utils/getToken";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import { TableComponent } from "../components/StudentTable";
import { Card } from "../components/ui/card";

export const StudentsPage = () => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });

  const [hostel, setHostel] = useState(null);
  const [mess, setMess] = useState(null);
  const [batch, setBatch] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [username, setUsername] = useState(null);
  const [toDate, setToDate] = useState(null);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col h-full w-full">
        <Navbar />
        <div className="px-6 pb-6 pt-6">
          <StudentCard2 />
        </div>
      </div>
    </div>
  );
};