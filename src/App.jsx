import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Vocabulary from "./Vocabulary";
import VocabularyGame from "./VocabularyGame";
import Home from "./HomePage";
import "./App.css";

import { vocabularies } from "./data/vocabulary";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedQuestionCharacter, setSelectedQuestionCharacter] =
    useState("english");

  const [selectedAnswerCharacter, setSelectedAnswerCharacter] =
    useState("romaji");

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
              selectedQuestionCharacter={selectedQuestionCharacter}
              setSelectedQuestionCharacter={setSelectedQuestionCharacter}
              selectedAnswerCharacter={selectedAnswerCharacter}
              setSelectedAnswerCharacter={setSelectedAnswerCharacter}
            />
          }
        />
        <Route
          path="/vocabulary-game"
          element={
            <VocabularyGame
              vocabularies={vocabularies}
              selectedCategories={selectedCategories}
              selectedQuestionCharacter={selectedQuestionCharacter}
              selectedAnswerCharacter={selectedAnswerCharacter}
              setSelectedAnswerCharacter={setSelectedAnswerCharacter}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
