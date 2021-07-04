import React, { useState, useEffect } from 'react';
import textFile from "./loadingScript.txt";

export default function LoadingScript() {
	
	const [data, setData] = useState([]);

	fetch(textFile)
		.then(response => response.text())
		.then(data => setData(data.split("\n")));

	return ( 
		<div className="LoadingScript">
			<div className="text-container">
				{ 
					data.map((line, index) => (
						<p className="script-line">
							{ line }
						</p>
					))
				}
			</div>
		</div>
	)
}
