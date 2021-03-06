import Projects from "../projects/Projects.jsx";
import HelloWorld from "../helloWorld/HelloWorld.jsx";
import Contact from "../contact/Contact.jsx";
import Skills from "../skills/Skills.jsx";

import { Route, Switch } from "react-router-dom";

export default function MainScreen() {

	const projects = [
		{
			name: "NJIT: Let's Meet",
			tech: "React, Flask, Sockets, PostgreSQL, Google Oauth", 
			info: "This project was a collaborative effort between myself and 3 other NJIT students.  We tried to tackle the problem of a 'dead' campus by creating an application in a ~1 month time frame, to help students create campus specific events on the fly.  This app was made utilizing the following technologies: React, Flask, PostgreSQL, and sockets for real time data transfer."
		},
		{
			name: "A* - Dijkstra Visualizer",
			tech: "React, Javascript Canvas",
			info: "This project was made just out of interest of the topic, utilizing the Javascript Canvas for the essential visuals of the project.  The goal of this project is to showcase the difference a heuristic makes in maze traversal.",
		},
		{
			name: "Conway's Game of Life",
			tech: "React, Javascript Canvas",
			info: "Conway's Game of Life was made similarly to the A* - Dikjstra Visualizer, utilizing the Canvas aspect of Javascript for the visuals.  Conway's Game of Life is based on a 'default' set of rules that are applied to a group of cells, however the rules can be changed in order to produce different results."
		},
		{
			name: "From Babcia With Love",
			tech: "Flask, Spoonacular API, Twitter API, HTML / CSS",
			info: "From Babcia With Love was just a demonstration of being able to use API's, in this case both the Twitter API and the Spoonacular API.  The Spoonacular API allows for pulling ingredients pertaining to a specific dish, and the Twitter API to filter out a tweet based on the type of food / dish displayed.  The project was made using Python Flask, and standard HTML.",
		}
	]
	return (
				<div className="MainScreen">
						<Switch>
							<Route exact path="/" component={ HelloWorld } />
							<Route path="/projects" component={ Projects } />
							<Route path="/contact" component={ Contact } />
						</Switch>
						<Switch>
							<div className="project-detail">
								{
									projects.map((project, index) => (
										<Route path={ `/projects/${project.name}` }>
											<div className="project-name">
												<span>Project: </span>{ project.name }
											</div>
											<div className="project-tech">
												<span>Tech: </span>{ project.tech }
											</div>
											<div className="project-info">
												<span>Info: </span>{ project.info }
											</div>
										</Route>
									))	
								}
							</div>
						</Switch>
				</div>
	)
}
