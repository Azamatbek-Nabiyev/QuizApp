import React, { useState, useContext } from 'react';
import { Question } from './../Helpers/QuestionBank';
import { QuizContext } from './../Helpers/Contexts';
import App from './../App.css';

function EndScreen() {

  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu")
  };

  return (
    <div className='endScreen'>
      <h1>Quiz Finished</h1>
      <h3>{ score } / { Question.length }</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
