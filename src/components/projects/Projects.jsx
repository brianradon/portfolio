import Project from "./Project.jsx";
import { Link } from "react-router-dom";

export default function Projects() {
	const projects = [
		{
			name: "NJIT: Let's Meet",
			github: "todo-github",
			hosted: "todo-host"
		},
		{
			name: "A* - Dijkstra Visualizer",
			github: "todo-github",
			hosted: "todo-host"
		},
		{
			name: "Conway's Game of Life",
			github: "todo-github",
			hosted: "todo-host"
		},
		{
			name: "From Babcia With Love",
			github: "todo-github",
			hosted: "todo-host"
		}
	]

	return (
		<div className="projects">
			{ projects.map((project, index) => (
				<Link to={ `/projects/${project.name}` }>
					<div className="project-container">
						<Project 
							key={index}
							name={project.name}
						/>
						<div className="direct-links">
							<a href={ project.github }>Github</a>
							<a href={ project.hosted}>Link</a> 
						</div>
					</div>
				</Link>
			)) }
		</div>
	)
}
