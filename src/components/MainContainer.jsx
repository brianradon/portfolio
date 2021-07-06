import React, { useState, useEffect } from 'react';
import LoadingBar from "./loadingBar/LoadingBar.jsx";
import Keyboard from "./keyboard/Keyboard.jsx";
import SkillsContainer from "./skills/SkillsContainer.jsx";
import MainScreen from "./mainScreen/MainScreen.jsx";
import Clock from "./clock/Clock.jsx";
import Radar from "./radar/Radar.jsx";
import Navigation from "./navigation/Navigation.jsx";

export default function MainContainer() {

	const [isCurrent, setIsCurrent] = useState(false);

	useEffect(() => {
		setInterval(() => update(), 7000);
	})

	function update() {
		setIsCurrent(true);
	}

	return (
		<div className="black-screen">
		{ isCurrent ?
		<div className="MainContainer">
			<div className="top-bottom-container">
				<div className="topDisplay">
					<div className="left-container">
						<Clock />
						<SkillsContainer />
					</div>
					<MainScreen />
					<div className="right-container">
						<Radar />
						<Navigation />
					</div>
				</div> 
				<div className="bottomDisplay">
					<Keyboard />
				</div>
			</div> 
		</div> : <LoadingBar /> }
		</div>
	)
}
