import React, { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div>
      <h1>Quiz Game</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.text}</h2>
          {question.choices.map((choice, i) => (
            <button key={i}>{choice}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
