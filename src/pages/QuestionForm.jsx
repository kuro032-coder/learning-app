import { Link } from "react-router-dom"
import React, { useState } from 'react';
import './QuestionForm.css';

function QuestionForm() {
  const messageStart = '問題と答えを入力して下さい';
  const messageSuccess = '保存できました';
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState(messageStart);

  const handleSave = () => {
    const newQuestion = { question, answer };

    // 既存のクイズデータを読み込み（なければ空配列）
    const existingData = JSON.parse(localStorage.getItem('questions') || '[]');

    if((question.length > 0)&&(answer.length > 0)){
      // 新しいデータを追加して保存
      const updatedData = [...existingData, newQuestion];
      localStorage.setItem('questions', JSON.stringify(updatedData));
      setMessage(messageSuccess);

      // フォームをクリア
      setQuestion('');
      setAnswer('');
    }else if(question.length == 0){
      setMessage('問題が未入力です');
    }else{
      setMessage('答えが未入力です');
    }

  };

  return (
    <div>
      <h1>問題登録</h1>
      <input
        id="questionForm"
        type="text"
        placeholder="問題を入力"
        size="160"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <input
        id="answerForm"
        type="text"
        placeholder="答えを入力"
        size="160"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>保存</button>
      <br />
      <p className={message === messageStart ||  message === messageSuccess ? 'message-success' : 'message-error'} >
        {message}
      </p>
      <br />
      <Link to='/' >トップページに戻る</Link>
    </div>
  );
}

export default QuestionForm;