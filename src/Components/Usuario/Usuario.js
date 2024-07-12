import React from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";


function Usuario() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div className="flex-1">
        <Header/>
      </div>
    </div>

  );
}

export default Usuario;
