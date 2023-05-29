import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";

localStorage.setItem("isAuthenticated", true);

function VocabularyGame({
  vocabularies,
  selectedCategories,
  selectedQuestionCharacter,
  selectedAnswerCharacter,
  setSelectedAnswerCharacter,
}) {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");
  const [wordList, setWordList] = useState([]);
  const [currentWord, setCurrentWord] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Every time the categories are changed, the list is shuffled
  useEffect(() => {
    const list = shuffle(
      selectedCategories.flatMap((category) => vocabularies[category])
    );
    setWordList(list);
    setCurrentWord(list[0]);
  }, [selectedCategories, vocabularies]);

  // When the user answers
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotal(total + 1);

    const userInput = userAnswer.toLowerCase();
    let answer = currentWord[selectedAnswerCharacter];

    // If your answer is on an object property that is an array
    if (Array.isArray(answer)) {
      if (answer.includes(userInput)) {
        setScore(score + 1);
        setResult("correct");
        setCorrectAnswer("");
      } else {
        setResult("wrong");

        let substr = "";
        answer.forEach((ans, idx) => {
          if (idx === answer.length - 1) {
            substr += ans;
          } else {
            substr += ans + " or ";
          }
          return substr;
        });
        setCorrectAnswer(substr);
      }
    } else if (userInput === answer.toLowerCase()) {
      setScore(score + 1);
      setResult("correct");
      setCorrectAnswer("");
    } else {
      setCorrectAnswer(answer.toLowerCase());
      setResult("wrong");
    }
    setUserAnswer("");

    if (wordList.length > 1) {
      setWordList(wordList.slice(1));
      setCurrentWord(wordList[1]);
    } else {
      const newList = shuffle(
        selectedCategories.flatMap((category) => vocabularies[category])
      );
      setWordList(newList);
      setCurrentWord(newList[0]);
    }
  };

  // Renders the word to display in the flash card
  const renderWordDisplayed = () => {
    console.log(
      "Render word displayed.",
      currentWord[selectedQuestionCharacter.toLowerCase()]
    );
    /**
     * Sometimes, the entry for a specific character is an array, so in that
     * case, the first item inside that array will be chosen.
     */
    if (Array.isArray(currentWord[selectedQuestionCharacter.toLowerCase()])) {
      return currentWord[selectedQuestionCharacter.toLowerCase()][0];
    }

    // If the object property value is not an array, render normally
    return currentWord[selectedQuestionCharacter.toLowerCase()];
  };

  return (
    <div className="vocabulary-game-page">
      <div className="game__word-display">{renderWordDisplayed()}</div>
      <div className={`game__score ${result}`}>
        Score: {score}/{total}
      </div>
      {correctAnswer !== "" && (
        <div className={`game__correct_answer ${result}`}>
          Correct Answer: {correctAnswer}
        </div>
      )}
      <form className="game__input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="finish-button-container">
        <Link to="/vocabulary" className="game__finish-button">
          Done Practicing
        </Link>
      </div>
    </div>
  );
}

export default VocabularyGame;
