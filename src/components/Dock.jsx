import React from "react";
import "./dock.scss";

const Dock = ({ windowState, setwindowState }) => {
	return (
		<footer className="dock">
			<div
				onClick={() => {
					setwindowState({
						...windowState,
						github: !windowState.github,
					});
				}}
				className="icon github"
			>
				<img src="./doc-icons/github.svg" alt="" />
			</div>
			<div
				onClick={() => {
					setwindowState({ ...windowState, note: !windowState.note });
				}}
				className="icon note"
			>
				<img src="./doc-icons/note.svg" alt="" />
			</div>
			<div
				onClick={() => {
					setwindowState({
						...windowState,
						resume: !windowState.resume,
					});
				}}
				className="icon pdf"
			>
				<img src="./doc-icons/pdf.svg" alt="" />
			</div>
			<div
				onClick={() => {
					window.open("https://calendar.google.com", "_blank");
				}}
				className="icon calendar "
			>
				<img src="./doc-icons/calendar.svg" alt="" />
			</div>
			<div
				onClick={() => {
					setwindowState({
						...windowState,
						spotify: !windowState.spotify,
					});
				}}
				className="icon spotify"
			>
				<img src="./doc-icons/spotify.svg" alt="" />
			</div>
			<div
				onClick={() => {
					window.open(
						"https://mail.google.com/mail/?view=cm&fs=1&to=sujalkumbhar001@gmail.com&su=Portfolio%20Contact&body=Hi%20Sujal,%0D%0AI%20saw%20your%20portfolio.",
						"_blank",
					);
				}}
				className="icon mail "
			>
				<img src="./doc-icons/mail.svg" alt="" />
			</div>
			<div
				onClick={() => {
					window.open(
						"https://www.linkedin.com/in/sujal-kumbhar-952241292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
						"_blank",
					);
				}}
				className="icon link"
			>
				<img src="./doc-icons/link.svg" alt="" />
            </div>
            <div
				onClick={() => {
					window.open("https://x.com/derekdipshit", "_blank");
				}}
				className="icon x"
			>
				<img src="./doc-icons/x.svg" alt="" />
			</div>
            <div
				onClick={() => {
					window.open("https://www.google.com/", "_blank");
				}}
				className="icon chrome"
			>
				<img src="./doc-icons/chrome.svg" alt="" />
			</div>
			<div
				onClick={() => {
					setwindowState({ ...windowState, cli: !windowState.cli });
				}}
				className="icon cli"
			>
				<img src="./doc-icons/cli.svg" alt="" />
			</div>
		</footer>
	);
};

export default Dock;
