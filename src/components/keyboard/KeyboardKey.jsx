import React, { useState, useEffect } from 'react';

export default function KeyboardKey( { keyboardKey } ) {

	const [current, setCurrent] = useState(false);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.keyCode === keyboardKey.keyCode) {
				setCurrent(true);
				setTimeout(() => setCurrent(false), 100);
			}
		}

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, [keyboardKey.keyCode]);

	return (
		<div className={`KeyboardKey ${current && "flash-key"}`}>
			{ keyboardKey.trigger }
		</div>
	)
}
