import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import './QuestionList.css';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [questionDeleted, setQuestionDeleted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('questions');
    if (storedData) {
      setQuestions(JSON.parse(storedData));
    }
  }, []);

  const questionDelete= (deleteIndex) => 
  {
    questions.splice(deleteIndex,1);
    localStorage.setItem('questions', JSON.stringify(questions));
    setQuestionDeleted(true);
  }

  return (
    <div >
      <h1>問題一覧</h1>

      {questionDeleted && (
        <p className = "question-deleted" >問題を削除しました</p>
      )}

      {questions.length > 0 ? (
        <ul>
          {questions.map((item, index) => (
            <li key={index}className="question-item" >
              <strong>Q{index + 1}: {item.question}</strong>
              <button onClick={() => questionDelete(index)}> 削除  </button>
              <br />
              <span>答え: {item.answer}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>問題が保存されていません</p>
      )}

      <Link to='/'>トップページに戻る</Link>
    </div>
  );
}

export default QuestionList