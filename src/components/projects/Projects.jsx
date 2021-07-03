import Project from "./Project.jsx";

export default function Projects() {
	const projects = [
		{
			name: "NJIT: Let's Meet"
		},
		{
			name: "A* / Dijkstra Visualizer"
		},
		{
			name: "Music Player (WIP)"
		}
	]
	return (
		<div className="projects">
			{ projects.map((project, index) => (
				<Project 
					key={index}
					name={project.name}
				/>
			)) }
		</div>
	)
}
