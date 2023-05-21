import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { shuffle } from "lodash";

localStorage.setItem("isAuthenticated", true);

function VocabularyGame({
	vocabularies,
	selectedCategories,
	selectedLanguageType,
}) {
	const [score, setScore] = useState(0);
	const [total, setTotal] = useState(0);
	const [result, setResult] = useState("");
	const [wordList, setWordList] = useState([]);
	const [currentWord, setCurrentWord] = useState({});
	const [userAnswer, setUserAnswer] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState("");

	useEffect(() => {
		const list = shuffle(
			selectedCategories.flatMap((category) => vocabularies[category])
		);
		setWordList(list);
		setCurrentWord(list[0]);
	}, [selectedCategories, vocabularies]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTotal(total + 1);

		if (Array.isArray(currentWord.meaning)) {
			if (currentWord.meaning.includes(userAnswer.toLowerCase())) {
				setScore(score + 1);
				setResult("correct");
				setCorrectAnswer("");
			} else {
				setResult("wrong");

				let substr = "";
				currentWord.meaning.forEach((ans, idx) => {
					if (idx === currentWord.meaning.length - 1) {
						substr += ans;
					} else {
						substr += ans + " or ";
					}
					return substr;
				});
				setCorrectAnswer(substr);
			}
		} else if (
			userAnswer.toLowerCase().includes(currentWord.meaning.toLowerCase())
		) {
			setScore(score + 1);
			setResult("correct");
			setCorrectAnswer("");
		} else {
			setCorrectAnswer(currentWord.meaning.toLowerCase());
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

	return (
		<div className="vocabulary-game-page">
			<div className="game__word-display">
				{currentWord[selectedLanguageType.toLowerCase()]}
			</div>
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
