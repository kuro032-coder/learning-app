import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';

function QuizPlayer() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const getRandomQuestion = () => {
        if (questions.length === 0) return;
        setShowAnswer(false);
        const index = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[index]);

    };

    useEffect(() => {
      const storedData = localStorage.getItem('questions');
      if (storedData) {
        setQuestions(JSON.parse(storedData));
      }
    }, []);

    return (
    <div style={{ padding: '1rem' }}>
      <h1>問題実施</h1>
      <button onClick={getRandomQuestion}>ランダムに出題</button>

      {currentQuestion && (
        <div>
          <h3>問題</h3>
          <p>{currentQuestion.question}</p>

          {!showAnswer && (
            <button onClick={() => setShowAnswer(true)}>答え</button>
          )}

          {showAnswer && (
            <p><strong>答え：</strong>{currentQuestion.answer}</p>
          )}
        </div>
      )}
      <br/>
      <br/>
      <Link to='/' >トップページに戻る</Link>
    </div>

    )
}

export default QuizPlayer
