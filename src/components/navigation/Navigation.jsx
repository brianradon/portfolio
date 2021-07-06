import NavButton from "./NavButton.jsx";

export default function Navigation() {
	const routes = [
		{
			name: "main",
			route: "/",
			icon: <ion-icon className="icon" name="heart"></ion-icon>
		},
		{
			name: "projects",
			route: "/projects",
			icon: ""
		},
		{
			name: "contact",
			route: "/contact",
			icon: ""
		}
	]
	return ( 
		<div className="Navigation">
		{ 
			routes.map((route, index) => (
				<NavButton	navButton={ route } />
			))
		}		
		</div>
	)
}
