import { Link } from 'react-router-dom';

export default function NavButton( { navButton } ) {
	return ( 
		<div className="NavButton">
			<Link to={ navButton.route }> 
				{ navButton.icon }
				<p className="navName">{ navButton.name }</p>
			</Link>
		</div>
	)
}
