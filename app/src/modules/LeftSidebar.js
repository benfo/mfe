import React, { useEffect, useRef } from "react";
import {mount} from "leftSideBar/leftSideBar";
import "./LeftSidebar.css";

const LeftSidebarModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div className="left-sidebar-module"><app-cool></app-cool></div>;
};

export default LeftSidebarModule;