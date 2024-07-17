import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const score = localStorage.getItem('score');
  const totalQuestions = localStorage.getItem('totalQuestions');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Test Results</h1>
          <div className="rounded-md p-6 mb-6">
            <p className="text-2xl font-semibold">
              Your Score: {score} / {totalQuestions}
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate('/conductexam')}
              className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-8 rounded-md focus:outline-none"
            >
              Retake Test
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-8 rounded-md focus:outline-none"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
