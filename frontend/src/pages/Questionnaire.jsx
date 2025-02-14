import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const questions = [
    { id: 1, text: 'What is your skin type?', options: ['Oily', 'Dry', 'Combination', 'Normal'] },
    { id: 2, text: 'What are your main concerns?', options: ['Acne', 'Aging', 'Dark Spots', 'Dryness'] },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/products/recommend', {
        skinType: answers[1],
        concerns: answers[2],
      });
      navigate('/results', { state: { products: response.data } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="questionnaire">
      <h2>{questions[step - 1].text}</h2>
      <div className="options">
        {questions[step - 1].options.map((option) => (
          <button key={option} onClick={() => handleAnswer(questions[step - 1].id, option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;