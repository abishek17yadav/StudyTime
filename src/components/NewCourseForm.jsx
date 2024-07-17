import React, { useState } from 'react';

const NewCourseForm = ({ addCourse }) => {
  const [courseName, setCourseName] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [courseLink, setCourseLink] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName || !courseImage || !courseLink || !courseDescription) {
      alert('Please fill in all fields.');
      return;
    }

    const newCourse = {
      name: courseName,
      image: courseImage,
      link: courseLink,
      description: courseDescription,
    };

    addCourse(newCourse);

    setCourseName('');
    setCourseImage('');
    setCourseLink('');
    setCourseDescription('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="courseName" className="block font-medium text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseImage" className="block font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="courseImage"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={courseImage}
            onChange={(e) => setCourseImage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseLink" className="block font-medium text-gray-700">
            Course Link (URL)
          </label>
          <input
            type="url"
            id="courseLink"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={courseLink}
            onChange={(e) => setCourseLink(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="courseDescription" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="courseDescription"
            rows="3"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default NewCourseForm;
