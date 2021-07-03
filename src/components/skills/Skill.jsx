import ProgressBar from "./ProgressBar.jsx";

export default function Skill( { skillPoint } ) {
	return (
		<div className="Skill">
			{ skillPoint.name }
			<ProgressBar skillPoint={ skillPoint }/>
		</div>
	)
}
