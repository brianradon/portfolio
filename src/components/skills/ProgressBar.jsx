export default function ProgressBar( { skillPoint } ) {
	return (
		<div className="ProgressBar">
			<div className="exp-obtained" style={{ "width": `${ skillPoint.exp }%` }}/> 
			<div className="overall-exp" />
		</div>
	)
}
