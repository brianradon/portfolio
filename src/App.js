import React, { useState } from 'react';
import LoadingScript from "./components/loadingScript/LoadingScript.jsx";
import MainContainer from "./components/MainContainer.jsx";

function App() {
  
  const [isScript, setIsScript] = useState(false);
	setInterval(() => update(), 5000);

	function update() {
		setIsScript(true);
	}  

  return (
    <div className="App">
		{ isScript ? <MainContainer /> : <LoadingScript />}
    </div>
  );
}

export default App;
