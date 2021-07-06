import React, { useState } from 'react';
import LoadingScript from "./components/loadingScript/LoadingScript.jsx";
import MainContainer from "./components/MainContainer.jsx";

function App() {

  const [isCurrent, setIsCurrent] = useState(false);
  const [isScript, setIsScript] = useState(false);
	setInterval(() => update(), 5000);

	function update() {
		setIsScript(true);
		setIsCurrent(true);
	}  

  return (
    <div className="App">
		{ isScript && isCurrent ? <MainContainer /> : <LoadingScript />}
    </div>
  );
}

export default App;
