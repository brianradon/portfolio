import Skill from "./Skill.jsx";

export default function Skills() {

	const skillPoints = [
		{
			name: "ReactJS",
			exp: 75 
		},
		{
			name: "Java",
			exp: 90 
		},
		{
			name: "Python",
			exp: 70 
		},
		{
			name: "Javascript/HTML/CSS",
			exp: 80 
		},
		{
			name: "NodeJS",
			exp: 50 
		}
	];

	return (
		<div className="Skills">
			{ skillPoints.map((skillPoint,index) => (
				<Skill skillPoint={skillPoint}/>	
			)) }
		</div>
	)
}
