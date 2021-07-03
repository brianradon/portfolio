import Keyboard from "./keyboard/Keyboard.jsx";
import SkillsContainer from "./skills/SkillsContainer.jsx";
import MainScreen from "./mainScreen/MainScreen.jsx";
import Clock from "./clock/Clock.jsx";

export default function MainContainer() {
	return (
		<div className="MainContainer">
			<div className="topDisplay">
				<div className="left-container">
					<Clock />
					<SkillsContainer />
				</div>
				<MainScreen />
			</div> 
			<Keyboard />
		</div>
	)
}
