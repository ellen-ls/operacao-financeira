import React from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../shared/Sidebar";


function Usuario() {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div className="p-4">
        <div className="bg-slate-500">header</div>
      </div>
    </div>

  );
}

export default Usuario;
