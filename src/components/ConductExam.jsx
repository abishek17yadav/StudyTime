import React from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { name: 'English', gradientColor: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
  { name: 'Maths', gradientColor: 'bg-gradient-to-r from-green-400 to-blue-500' },
  { name: 'Science', gradientColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
  { name: 'Computer Science', gradientColor: 'bg-gradient-to-r from-red-500 to-yellow-500' },
  { name: 'Networking', gradientColor: 'bg-gradient-to-r from-purple-400 to-purple-600' },
  { name: 'Data Science', gradientColor: 'bg-gradient-to-r from-indigo-400 to-blue-500' },
];

function ConductExam() {
  const navigate = useNavigate();

  const startExam = (subjectName) => {
    navigate(`/exam/${subjectName}`);
  };

  return (
    <div className=' p-1'>
      {subjects.map((subject) => (
        <div
          key={subject.name}
          className={`${subject.gradientColor} text-white p-4 mt-7 px-10 flex justify-between items-center rounded-lg`}
          style={{ height: '100px' }} 
        >
          <p className="text-xl font-bold">{subject.name}</p>
          <button
            className="bg-white text-gray-800 hover:bg-gray-300 px-4 py-2 rounded"
            onClick={() => startExam(subject.name)}
          >
            Start Exam
          </button>
        </div>
      ))}
    </div>
  );
}

export default ConductExam;
