import React from "react";
import { Link } from "react-router-dom";

localStorage.setItem("isAuthenticated", false);

function Vocabulary({
	selectedCategories,
	setSelectedCategories,
	selectedQuestionCharacter,
	setSelectedQuestionCharacter,
}) {
	const categories = [
		// "Chapter 1",
		// "Countries",
		// "Family",
		// "Demonstratives",
		// "Chapter 2",
		// "Locatives",
		// "Chapter 3",
		// "Numbers (1-99)",
		// "Chapter 4",
		// "Dates",
		// "Days Of The Week",
		// "Non-specific Time Expressions",
		// "Chapter 5",
		// "Span Of Time",
		// "Chapter 6",
		// "Adjectives 1",
		// "Chapter 7",
		// "Chapter 8",
		// "Chapter 9",
		// "Chapter 10",
		// "Chapter 11",
		// "Chapter 12",
		// "Chapter 13",
		// "Chapter 14",
		"Chapter 15",
		"Chapter 16",
		"Chapter 17",
		"Chapter 18",
		"Chapter 19",
		"Chapter 20",
		"Ume Goi 3",
		"Ume Goi 4",
	];

	const cardCharacters = ["kanji", "kana", "romaji", "english"];

	const handleCategorySelection = (category) => {
		setSelectedCategories((prevSelectedCategories) =>
			prevSelectedCategories.includes(category)
				? prevSelectedCategories.filter((c) => c !== category)
				: [...prevSelectedCategories, category]
		);
	};

	return (
		<div className="vocabulary-page">
			<h1>Vocabulary (Goi)</h1>
			<Link to="/" className="vocabulary__back-button">
				Back
			</Link>
			<div className="vocabulary-buttons">
				{categories.map((category, index) => (
					<button
						key={index}
						className={`vocabulary-button ${
							selectedCategories.includes(category) ? "button-selected" : ""
						}`}
						onClick={() => handleCategorySelection(category)}
					>
						{category}
					</button>
				))}
			</div>
			<h3>Flash Card:</h3>
			<div className="script-buttons">
				{cardCharacters.map((cardCharacter, index) => (
					<button
						key={index}
						className={`script-button ${
							selectedQuestionCharacter === cardCharacter
								? "button-selected"
								: ""
						}`}
						// disabled={selectedAnswerCharacter === cardCharacter}
						onClick={() => setSelectedQuestionCharacter(cardCharacter)}
					>
						{cardCharacter}
					</button>
				))}
			</div>
			<div className="start-game-container">
				<Link
					to={selectedCategories.length > 0 ? "/vocabulary-game" : "#"}
					className={`start-game-button ${
						selectedCategories.length > 0 ? "" : "button-disabled"
					}`}
				>
					Start Game
				</Link>
			</div>
		</div>
	);
}

export default Vocabulary;
