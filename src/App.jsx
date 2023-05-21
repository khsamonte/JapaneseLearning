import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Vocabulary from "./Vocabulary";
import VocabularyGame from "./VocabularyGame";
import Home from "./HomePage";
import "./App.css";

import { vocabularies } from "./data/vocabulary";

function App() {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedLanguageType, setSelectedLanguageType] = useState("Romaji");

	return (
		<div className="main-container">
			<Routes>
				<Route path="/" exact element={<Home />}></Route>
				<Route
					path="/vocabulary"
					exact
					element={
						<Vocabulary
							vocabularies={vocabularies}
							selectedCategories={selectedCategories}
							setSelectedCategories={setSelectedCategories}
							selectedLanguageType={selectedLanguageType}
							setSelectedLanguageType={setSelectedLanguageType}
						/>
					}
				/>
				<Route
					path="/vocabulary-game"
					exact
					element={
						<VocabularyGame
							vocabularies={vocabularies}
							selectedCategories={selectedCategories}
							selectedLanguageType={selectedLanguageType}
						/>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
