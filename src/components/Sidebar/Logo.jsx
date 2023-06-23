import React from "react";
import logo from "../../assets/logo-1.svg";
import "../../styles/styling.css"

export default function Logo({ isOpen }) {
	return (
		<div
			className={`logo cursor-pointer flex flex-col gap-y-2 items-center pt-3 duration-300 ${
				isOpen ? "mb-20" : "mb-10"} mediaLogo`}
		>
			<img src={logo} alt="logo" className="w-10" />

			<h1 style={{textAlign: "center"}}
				className={`font-extrabold origin-left duration-100
				text-brown-main text-3xl ${!isOpen && "opacity-0"} mediaHeading`}
			>
				Finance-App #AR
			</h1>
		</div>
	);
}
