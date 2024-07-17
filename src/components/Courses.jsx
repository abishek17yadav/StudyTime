import React, { useState, useEffect, useRef } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import NewCourseForm from './NewCourseForm';

function CoursesPage() {
  const initialCourses = [
    { 
      name: 'F.L.A.M.E.S 24 🔥', 
      image: '/images/Angaar.jpg', 
      link: 'https://youtube.com/playlist?list=PLtlkmeoc1tYGypO0OPPy4JWN1_w6Ee9B8&si=S6sY3xYkEELNAPEv', 
      description: ' full-stack course covers both front-end and back-end web development.' 
    },
    { 
      name: 'Computer Programming', 
      image: '/images/C.jpg', 
      link: 'https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=VjBRXjKIEVYh0un1', 
      description: 'Comprehensive course on fundamental computer science principles.' 
    },
    { 
      name: 'Python', 
      image: '/images/python.jpg', 
      link: 'https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=5W4J4ok3wh-8Hou2', 
      description: 'Learn Python programming from beginner to advanced level.' 
    },
    { 
      name: 'Maths Foundation', 
      image: '/images/maths.jpg', 
      link: 'https://youtube.com/playlist?list=PLXTyt_wUBqQ5Axt76rasrdgZ4SYE27SCe&si=KU9rC90NEkBVXJzT', 
      description: 'Sharpen your aptitude skills with these comprehensive lessons.' 
    },
    { 
      name: 'Java', 
      image: '/images/java.jpg', 
      link: 'https://youtube.com/playlist?list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0&si=MR7qNKoYTaVB_eYp', 
      description: ' Java is a widely-used, high-level programming language.' 
    },
    { 
      name: 'DSA', 
      image: '/images/pw.jpg', 
      link: 'https://youtube.com/playlist?list=PLxgZQoSe9cg0df_GxVjz3DD_Gck5tMXAd&si=AJTRsO-j-r81vrFF', 
      description: 'DSA is the study of organizing and managing data efficiently.' 
    },
  ];

  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem('courses');
    return savedCourses ? JSON.parse(savedCourses) : initialCourses;
  });

  const [showDropdown, setShowDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const addCourse = (course) => {
    const updatedCourses = [...courses, course];
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="w-full h-60 relative">
              <img src={course.image} alt={course.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Go to Course</button>
              </a>
            </div>
            <div className="absolute top-4 right-4" ref={dropdownRef}>
              <button onClick={() => setShowDropdown(showDropdown === index ? null : index)}>
                <FiMoreVertical className="text-gray-500" />
              </button>
              {showDropdown === index && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <button 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      deleteCourse(index);
                      setShowDropdown(null);
                    }}
                  >
                    Delete
                  </button>
                  <a 
                    href={`mailto:?subject=Check out this course&body=Here is a great course: ${course.link}`} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(null)}
                  >
                    Share
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <NewCourseForm addCourse={addCourse} />
    </div>
  );
}

export default CoursesPage;
