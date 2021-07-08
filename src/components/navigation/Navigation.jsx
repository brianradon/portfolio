import NavButton from "./NavButton.jsx";

export default function Navigation() {
	const routes = [
		{
			name: "main",
			route: "/",
			icon: <ion-icon name="planet-outline"></ion-icon> 
		},
		{
			name: "projects",
			route: "/projects",
			icon: <ion-icon name="aperture-outline"></ion-icon>
		},
		{
			name: "contact",
			route: "/contact",
			icon: <ion-icon name="radio-outline"></ion-icon> 
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
