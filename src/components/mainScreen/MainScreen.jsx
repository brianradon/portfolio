import Projects from "../projects/Projects.jsx";
import HelloWorld from "../helloWorld/HelloWorld.jsx";
import Contact from "../contact/Contact.jsx";

import { Route, Switch } from "react-router-dom";

export default function MainScreen() {
	return (
		<div className="MainScreen">
			<Switch>
				<Route exact path="/" component={ HelloWorld } />
				<Route path="/projects" component={ Projects } />
				<Route path="/contact" component={ Contact } />
			</Switch>
		</div>
	)
}
