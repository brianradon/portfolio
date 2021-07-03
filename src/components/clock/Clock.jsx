import React, { useState, useEffect } from 'react';

export default function Clock() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => update(), 1000);
		
		return () => {
			clearInterval(timer);
		}
	})
	
	function update() {
		setDate(new Date());
	}

	return (
		<div className="Clock">
			{ date.toLocaleTimeString("en-GB") }
		</div>
	)
}
