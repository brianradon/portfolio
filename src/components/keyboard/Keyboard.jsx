import React, { useState, useEffect } from 'react';
import KeyboardKey from "./KeyboardKey.jsx";

export default function Keyboard() {
	
	const keyboardKeysRow1 = [
		{
			keyCode: 192,
			trigger: "~"
		},
		{
			keyCode: 49,
			trigger: "1"
		},
		{
			keyCode: 50,
			trigger: "2"
		},
		{
			keyCode: 51,
			trigger: "3"
		},
		{
			keyCode: 52,
			trigger: "4"
		},
		{
			keyCode: 53,
			trigger: "5",
		},
		{
			keyCode: 54,
			trigger: "6"
		},
		{
			keyCode: 55,
			trigger: "7"
		},
		{
			keyCode: 56,
			trigger: "8"
		},
		{
			keyCode: 57,
			trigger: "9"
		},
		{
			keyCode: 48,
			trigger: "0"
		},
		{
			keyCode: 173,
			trigger: "-"
		},
		{
			keyCode: 61,
			trigger: "="
		},
		{
			keyCode: 8,
			trigger: "backspace"
		}
	];

	const keyboardKeysRow2 = [
		{
			keyCode: 9,
			trigger: "tab"
		},
		{
			keyCode: 81,
			trigger: "q"
		},
		{
			keyCode: 87,
			trigger: "w"
		},
		{
			keyCode: 69,
			trigger: "e"
		},
		{
			keyCode: 82,
			trigger: "r"
		},
		{
			keyCode: 84,
			trigger: "t",
		},
		{
			keyCode: 89,
			trigger: "y"
		},
		{
			keyCode: 85,
			trigger: "u"
		},
		{
			keyCode: 73,
			trigger: "i"
		},
		{
			keyCode: 79,
			trigger: "o"
		},
		{
			keyCode: 80,
			trigger: "p"
		},
		{
			keyCode: 219,
			trigger: "["
		},
		{
			keyCode: 221,
			trigger: "]"
		}
	];

	const keyboardKeysRow3 = [
		{
			keyCode: 20,
			trigger: "caps lock"
		},
		{
			keyCode: 65,
			trigger: "a"
		},
		{
			keyCode: 83,
			trigger: "s"
		},
		{
			keyCode: 68,
			trigger: "d"
		},
		{
			keyCode: 70,
			trigger: "f"
		},
		{
			keyCode: 71,
			trigger: "g",
		},
		{
			keyCode: 72,
			trigger: "h"
		},
		{
			keyCode: 74,
			trigger: "j"
		},
		{
			keyCode: 75,
			trigger: "k"
		},
		{
			keyCode: 76,
			trigger: "l"
		},
		{
			keyCode: 59,
			trigger: ";"
		},
		{
			keyCode: 222,
			trigger: "'"
		},
		{
			keyCode: 13,
			trigger: "enter"
		},
	];

	const keyboardKeysRow4 = [
		{
			keyCode: 16,
			trigger: "shift"
		},
		{
			keyCode: 90,
			trigger: "z"
		},
		{
			keyCode: 88,
			trigger: "x"
		},
		{
			keyCode: 67,
			trigger: "c"
		},
		{
			keyCode: 86,
			trigger: "v"
		},
		{
			keyCode: 66,
			trigger: "b",
		},
		{
			keyCode: 78,
			trigger: "n"
		},
		{
			keyCode: 77,
			trigger: "m"
		},
		{
			keyCode: 188,
			trigger: ","
		},
		{
			keyCode: 190,
			trigger: "."
		},
		{
			keyCode: 191,
			trigger: "/"
		},
		{
			keyCode: 16,
			trigger: "shift" 
		}
	];

	const keyboardKeysRow5 = [
		{
			keyCode: 32,
			trigger: " ", 
			width: 400 
		}
	];

	return (
		<div className="Keyboard">
			<div className="keyboard-row">
				{ keyboardKeysRow1.map((keyboardKey, index) => (
					<KeyboardKey 
						key={index}
						keyboardKey={ keyboardKey } 
						trigger={ keyboardKey.trigger }
						keyCode={ keyboardKey.keyCode }
					/> 
				)) }
			</div>
			<div className="keyboard-row">
				{ keyboardKeysRow2.map((keyboardKey, index) => (
					<KeyboardKey 
						key={index}
						keyboardKey={ keyboardKey } 
						trigger={ keyboardKey.trigger }
						keyCode={ keyboardKey.keyCode }
					/> 
				)) }
			</div>
			<div className="keyboard-row">
				{ keyboardKeysRow3.map((keyboardKey, index) => (
					<KeyboardKey 
						key={index}
						keyboardKey={ keyboardKey } 
						trigger={ keyboardKey.trigger }
						keyCode={ keyboardKey.keyCode }
					/> 
				)) }
			</div>
			<div className="keyboard-row">
				{ keyboardKeysRow4.map((keyboardKey, index) => (
					<KeyboardKey 
						key={index}
						keyboardKey={ keyboardKey } 
						trigger={ keyboardKey.trigger }
						keyCode={ keyboardKey.keyCode }
					/> 
				)) }
			</div>
			<div className="keyboard-row">
				{ keyboardKeysRow5.map((keyboardKey, index) => (
					<KeyboardKey 
						key={index}
						keyboardKey={ keyboardKey } 
						trigger={ keyboardKey.trigger }
						keyCode={ keyboardKey.keyCode }
						width={ keyboardKey.width }
					/> 
				)) }
			</div>
		</div>
	);
}
