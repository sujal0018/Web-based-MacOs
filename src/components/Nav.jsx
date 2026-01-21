import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
const Nav = ({ windowState, setwindowState }) => {
	return (
		<nav>
			<div className="left">
				<div className="apple-icon">
					<img src="./navbar-icons/apple.svg" alt="" />
				</div>

				<div className="nav-item">
					<p
						onClick={() => {
							window.open(
								"https://www.linkedin.com/in/sujal-kumbhar-952241292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
								"_blank",
							);
						}}
					>
						Sujal Kumbhar
					</p>
				</div>
				
				<div className="nav-item">
					<p
						onClick={() => {
							window.open("window.location", "_blank");
						}}
					>
						New Window
					</p>
				</div>
				<div className="nav-item">
					<p
						onClick={() => {
							setwindowState({
								...windowState,
								cli: !windowState.cli,
							});
						}}
					>
						Terminal
					</p>
				</div>
			</div>
			<div className="right">
				<div className="nav-icon">
					<img src="./navbar-icons/wifi.svg" alt="" />
				</div>
				<div className="nav-item">
					<DateTime />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
