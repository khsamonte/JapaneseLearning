import React from "react";
import { Link } from "react-router-dom";

localStorage.setItem("isAuthenticated", false);

function Vocabulary({
  selectedCategories,
  setSelectedCategories,
  selectedQuestionCharacter,
  setSelectedQuestionCharacter,
  selectedAnswerCharacter,
  setSelectedAnswerCharacter,
}) {
  const categories = [
    "Chapter 1",
    "Family",
    "Demonstratives",
    "Chapter 2",
    "Locatives",
    "Chapter 3",
    "Numbers (1-99)",
    // "Counters",""
    "Chapter 4",
    "Dates",
    "Days Of The Week",
    // "Time",
    // "Non-specific Time Expressions",
    "Chapter 5",
    "Span Of Time",
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
      <h3>Answer in:</h3>
      <div className="script-buttons">
        {cardCharacters.map((cardCharacter, index) => (
          <button
            key={index}
            className={`script-button ${
              selectedAnswerCharacter === cardCharacter ? "button-selected" : ""
            }`}
            // disabled={selectedQuestionCharacter === cardCharacter}
            onClick={() => setSelectedAnswerCharacter(cardCharacter)}
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
