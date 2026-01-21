import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";
const Cli = ({windowname,setwindowState}) => {
	return (
		<MacWindow windowname={windowname}  setwindowState={setwindowState}>
			<div className="cli-window">
				<Terminal
					commands={{
						about: {
							description: "Learn more about me",
							usage: "about",
							fn: () => `
Hi! I'm Sujal, a passionate full-stack developer.
I create beautiful and functional web applications
using modern technologies and best practices.
Type 'skills' to see what I work with!
`,
						},
						skills: {
							description: "View technical skills",
							usage: "skills",
							fn: () => `
Frontend:
  • React, React Router
  • HTML5, CSS3, SCSS,Tailwind CSS
  • JavaScript (ES6+)
  • Responsive Design

Backend:
  • Node.js, Express
  • MongoDB, SQL
  • RESTful APIs
  • Authentication & Authorization

Tools & Platforms:
  • Git & GitHub
  • VS Code
  • npm, Vite
  • Figma
`,
						},
						projects: {
							description: "View portfolio projects",
							usage: "projects",
							fn: () => `
1. Web-based MacOS Portfolio
   - React, SCSS, Vite
   - Interactive terminal interface
   - Integrated spotify
   - Modern UI/UX design

2. AI code reviewer
   - Node.js, OpenAI API
   - Automated code analysis
   - Suggests improvements

`,
						},
						experience: {
							description: "Check work experience",
							usage: "experience",
							fn: () => `
Current: Web Developer
  - Building responsive web applications
  - Collaborating with design teams
  - Implementing modern UI patterns

Previous: Internship
  - Frontend development
  - Bug fixing and feature enhancements
   
Passionate about learning and growing!
`,
						},
						contact: {
							description: "Get contact information",
							usage: "contact",
							fn: () => `
Email: sujalkumbhar001@example.com
GitHub: https://github.com/sujal0018
LinkedIn: linkedin.com/in/sujal-kumbhar-952241292
Location: Pune, India

Feel free to reach out!
`,
						},
						echo: {
							description: "Echo a passed string.",
							usage: "echo <string>",
							fn: (...args) => args.join(" "),
						},
					}}
					welcomeMessage={`
═══════════════════════════════════════
     Welcome to Sujal's Portfolio      
           Terminal Edition            
═══════════════════════════════════════

Type 'help' to see all available commands.
`}
					promptLabel={"me@Sujal:~$"}
				/>
			</div>
		</MacWindow>
	);
};

export default Cli;
