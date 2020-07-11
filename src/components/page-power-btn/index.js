import React from "react";
import { NavLink } from "react-router-dom";

console.log("page-power-btn loaded for: ");

const PagePowerBtn = () => {
  return (
    <>
      <div className="page-layout page-power-btn">
      
      <label class="el-switch">
        <input className="toggleNotActive" type="checkbox" name="switch" />
        <span class="el-switch-style"></span>
      </label>
          
      </div>
    </>
  );
};
export default PagePowerBtn;
