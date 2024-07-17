import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exampage.css';

function ExamPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(1800); // 30 minutes
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showInstructions, setShowInstructions] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=30&type=multiple');
        const data = await response.json();
        const formattedQuestions = data.results.map((q, index) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: q.correct_answer,
          id: index + 1,
        }));
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      endTest();
    }
  }, [timer]);

  const loadQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedOption,
    });

    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      if (selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer) {
        setScore((prevScore) => prevScore - 1);
      }
    }
  };

  const endTest = () => {
    localStorage.setItem('score', score);
    localStorage.setItem('totalQuestions', questions.length);
    navigate('/result');
  };

  const startTest = () => {
    setShowInstructions(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {showInstructions ? (
        <div className="instructions text-center bg-white p-6 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Exam Instructions</h1>
          <p className="mb-4">Exam Name: Dynamic Test</p>
          <p className="mb-4">Duration: 30 minutes</p>
          <p className="mb-4">Type: Multiple Choice Questions (MCQs)</p>
          <button className="start-button bg-blue-500 text-white px-6 py-2 rounded" onClick={startTest}>Start Test</button>
        </div>
      ) : (
        <div className="test-container w-full max-w-4xl bg-white p-6 rounded shadow-lg">
          <div className="header flex justify-between items-center mb-4">
            <div>
              <span id="test-title" className="text-xl font-bold">Dynamic Test</span>
            </div>
            <div>
              <span id="time-remaining" className="bg-red-500 text-white px-4 py-2 rounded">
                Time Remaining: <span id="time">{`${Math.floor(timer / 60)}:${String(timer % 60).padStart(2, '0')}`}</span>
              </span>
            </div>
          </div>

          <div id="test-screen">
            <div className="question mb-4">
              <p id="question-text" className="text-lg font-medium mb-2">
                {currentQuestionIndex < questions.length
                  ? questions[currentQuestionIndex].question
                  : 'Loading question...'}
              </p>
              <ul className="options">
                {currentQuestionIndex < questions.length &&
                  questions[currentQuestionIndex].options.map((option, i) => (
                    <li key={i} className="mb-2">
                      <input
                        type="radio"
                        name={`option-${currentQuestionIndex}`}
                        id={`option${i}`}
                        value={option}
                        checked={selectedAnswers[currentQuestionIndex] === option}
                        onChange={handleOptionChange}
                        className="hidden"
                      />
                      <label
                        htmlFor={`option${i}`}
                        className={`p-2 rounded block cursor-pointer ${selectedAnswers[currentQuestionIndex] === option ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                      >
                        {option}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="question-nav flex flex-wrap gap-2 mb-4">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => loadQuestion(index)}
                  className={`px-4 py-2 rounded ${index === currentQuestionIndex ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </button>
              ))}
            </div>

            <div className="footer flex justify-between">
              <button onClick={previousQuestion} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
              <button onClick={nextQuestion} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
              <button onClick={endTest} className="bg-red-500 text-white px-4 py-2 rounded">End Test</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExamPage;
