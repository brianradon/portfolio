import Projects from "../projects/Projects.jsx";
import HelloWorld from "../helloWorld/HelloWorld.jsx";
import { Route, Switch } from "react-router-dom";

export default function MainScreen() {
	return (
		<div className="MainScreen">
			<Switch>
				<Route exact path="/" component={ HelloWorld } />
				<Route path="/projects" component={ Projects } />
			</Switch>
		</div>
	)
}
