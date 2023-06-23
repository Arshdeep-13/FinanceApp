import React from "react";
import { useState } from "react";
import ControlSidebar from "../../assets/ControlSidebar.svg";
import Logo from "./Logo";
import Budget from "./Budget";
import Navs from "./Navs";
import { styleSidebar, styleToggler, styleSidebarMediaQuery } from "../../styles/twStyles";
import "../../styles/styling.css"

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className={`sidebar ${open ? "w-60" : "w-25"} ${styleSidebar} ${styleSidebarMediaQuery} mediaNav`} onDoubleClick={() => setOpen(!open)}>
      <div className="head mediaHead">
			<img src={ControlSidebar} alt="SidebarToggler" className={`${!open && "rotate-180" } ${styleToggler} arrowSide`}
			onClick={() => setOpen(!open)} />
			<Logo isOpen={open} className="mediaLogo"/>
			<Navs isOpen={open} className="mediaNavs"/>
      </div>
      <div className="foot">
        <Budget isOpen={open} />
      </div>
    </div>
  );
}
