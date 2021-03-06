import React, { useState, useEffect } from 'react';

export default function KeyboardKey( { trigger, keyboardKey } ) {
	
	const [current, setCurrent] = useState(false);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.keyCode === keyboardKey.keyCode) {
				setCurrent(true);
				console.log(event.keyCode);
				setTimeout(() => setCurrent(false), 100);
			}
		}

		document.addEventListener("keydown", handleKeyDown);
		console.log("added");
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			console.log("removed");
		}
	}, []);

	return (
		<div style={{width: `${keyboardKey.width}px` }} className={ `KeyboardKey ${current && "flash-key"}` }>
			{ keyboardKey.trigger }
		</div>
	)
}
