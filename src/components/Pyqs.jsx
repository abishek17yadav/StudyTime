import React from 'react';

const questionBanks = [
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

function Pyqs() {
  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Study Materials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {questionBanks.slice(0, 3).map((bank) => (
            <div key={bank.id} className="bg-white rounded-lg overflow-hidden border border-gray-900 shadow-md">
              <img
                src={bank.imageUrl}
                alt={bank.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{bank.title}</h1>
                <h2 className="text-lg font-medium mb-2">{bank.subject}</h2>
                <button
                  className="block w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => openPDF(bank.pdfUrl)}
                >
                  Open PDF
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {questionBanks.slice(3, 6).map((bank) => (
            <div key={bank.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <img
                src={bank.imageUrl}
                alt={bank.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold mb-2">{bank.title}</h1>
                <h2 className="text-lg font-medium mb-2">{bank.subject}</h2>
                <button
                  className="block w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={() => openPDF(bank.pdfUrl)}
                >
                  Open PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pyqs;
