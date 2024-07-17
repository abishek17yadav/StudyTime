import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <div className="w-full relative overflow-hidden h-96">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-96">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          >
            &lt;
          </button>
          <button
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-6xl">
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleCardClick('/courses')}
        >
          <h3 className="text-xl font-semibold mb-2">Courses</h3>
          <p>Explore our available courses and start learning today.</p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleCardClick('/pyqs')}
        >
          <h3 className="text-xl font-semibold mb-2">PYQs</h3>
          <p>Practice with previous year questions to test your knowledge.</p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleCardClick('/conductexam')}
        >
          <h3 className="text-xl font-semibold mb-2">Conduct Exam</h3>
          <p>Set up and conduct exams for your students easily.</p>
        </div>
        <div
          className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          onClick={() => handleCardClick('/contactus')}
        >
          <h3 className="text-xl font-semibold mb-2">Help or Feedback</h3>
          <p>Get in touch with us for any queries or support.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
