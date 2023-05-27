import React from "react";
import { Link } from "react-router-dom";

localStorage.setItem("isAuthenticated", false);

function Vocabulary({
  selectedCategories,
  setSelectedCategories,
  selectedLanguageType,
  setSelectedLanguageType,
}) {
  const categories = [
    "Chapter 1",
    "Family",
    "Demonstratives",
    "Chapter 2",
    "Locatives",
    "Chapter 3",
    "Numbers (1-99)",
    // "Counters",
    "Chapter 4",
    // "Time",
    // "Date",
    // "Non-specific Time Expressions",
    "Chapter 5"
  ];

  const languageTypes = ["Kanji", "Kana", "English"];

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
      <h3>Select Language Type</h3>
      <div className="script-buttons">
        {languageTypes.map((type, index) => (
          <button
            key={index}
            className={`script-button ${
              selectedLanguageType === type ? "button-selected" : ""
            }`}
            onClick={() => setSelectedLanguageType(type)}
          >
            {type}
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
