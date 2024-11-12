import React, { useState, useEffect, useRef } from 'react';
import { FiMoreVertical } from 'react-icons/fi';

function Pdfs() {
  const initialQuestionBanks = [
    {
      id: 1,
      title: 'DSA in detail',
      subject: 'DSA',
      imageUrl: '/images/dsa.jpg',
      pdfUrl: 'https://jeppiaarcollege.org/wp-content/uploads/2019/02/II-YEAR-III-SEM-CS8351-DATA-STRUCTURES.pdf',
    },
    {
      id: 2,
      title: 'All Maths problems',
      subject: 'Mathematics',
      imageUrl: '/images/mth.jpg',
      pdfUrl: 'https://www.scribd.com/document/441795469/Basic-Mathematics-Sample-Questions-and-Answers',
    },
    {
      id: 3,
      title: 'Physics questions',
      subject: 'Physics',
      imageUrl: '/images/phy.jpg',
      pdfUrl: 'https://www.maa.ac.in/prashnapedhi2023/12th/eng/12th_Physics_EngMed_QueBank_MSCERT.pdf',
    },
    {
      id: 4,
      title: 'IP addressing and Connections',
      subject: 'Networking',
      imageUrl: '/images/net.jpg',
      pdfUrl: 'https://www.cisco.com/c/dam/global/fi_fi/assets/docs/SMB_University_120307_Networking_Fundamentals.pdf',
    },
    {
      id: 5,
      title: 'Java full detail',
      subject: 'Java',
      imageUrl: '/images/ja.jpg',
      pdfUrl: 'https://www.tutorialspoint.com/java/java_tutorial.pdf',
    },
  ];

  const [questionBanks, setQuestionBanks] = useState(() => {
    const savedQuestionBanks = localStorage.getItem('questionBanks');
    return savedQuestionBanks ? JSON.parse(savedQuestionBanks) : initialQuestionBanks;
  });

  const [showDropdown, setShowDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const addPdf = (pdf) => {
    const updatedQuestionBanks = [...questionBanks, pdf];
    setQuestionBanks(updatedQuestionBanks);
    localStorage.setItem('questionBanks', JSON.stringify(updatedQuestionBanks));
  };

  const deletePdf = (index) => {
    const updatedQuestionBanks = questionBanks.filter((_, i) => i !== index);
    setQuestionBanks(updatedQuestionBanks);
    localStorage.setItem('questionBanks', JSON.stringify(updatedQuestionBanks));
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
      <h1 className="text-3xl font-bold text-center mb-8">Study Materials</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {questionBanks.map((bank, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="w-full h-60 relative">
              <img src={bank.imageUrl} alt={bank.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{bank.title}</h2>
              <p className="text-gray-700 mb-4">{bank.subject}</p>
              <a href={bank.pdfUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">Open PDF</button>
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
                      deletePdf(index);
                      setShowDropdown(null);
                    }}
                  >
                    Delete
                  </button>
                  <a 
                    href={`mailto:?subject=Check out this question bank&body=Here is a great question bank: ${bank.pdfUrl}`} 
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
      <NewPdfForm addPdf={addPdf} />
    </div>
  );
}

const NewPdfForm = ({ addPdf }) => {
  const [pdfTitle, setPdfTitle] = useState('');
  const [pdfImageUrl, setPdfImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [pdfSubject, setPdfSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pdfTitle || !pdfImageUrl || !pdfUrl || !pdfSubject) {
      alert('Please fill in all fields.');
      return;
    }

    const newPdf = {
      id: Date.now(),
      title: pdfTitle,
      imageUrl: pdfImageUrl,
      pdfUrl: pdfUrl,
      subject: pdfSubject,
    };

    addPdf(newPdf);

    setPdfTitle('');
    setPdfImageUrl('');
    setPdfUrl('');
    setPdfSubject('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pdfTitle" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="pdfTitle"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={pdfTitle}
            onChange={(e) => setPdfTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pdfImageUrl" className="block font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="pdfImageUrl"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={pdfImageUrl}
            onChange={(e) => setPdfImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pdfUrl" className="block font-medium text-gray-700">
            PDF Link (URL)
          </label>
          <input
            type="url"
            id="pdfUrl"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pdfSubject" className="block font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="pdfSubject"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            value={pdfSubject}
            onChange={(e) => setPdfSubject(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add PDF
        </button>
      </form>
    </div>
  );
};

export default Pdfs;
