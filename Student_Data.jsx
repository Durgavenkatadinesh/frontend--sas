import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Student_Data() {
  const location = useLocation();
  const { tableData } = location.state;
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mt-16 mb-4">Student Data</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tableData.map((student, index) => {
          const [studentId, studentName, index2, index3] = student;
          let percentage = 0;

          if (index2 === 'yes' && index3 === 'yes') {
            percentage = 100;
          } else if (index2 === 'yes' || index3 === 'no') {
            percentage = 50;
          }

          return (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 cursor-pointer" onClick={() => setSelectedStudent(student)}>
                <p className="text-xl font-semibold mb-2">Student ID: {studentId}</p>
                <p className="text-lg mb-2">Name: {studentName}</p>
              </div>
              {selectedStudent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="fixed inset-0 bg-black opacity-50"></div>
                  <div className="bg-white p-8 max-w-md mx-auto rounded-lg z-50">
                    <button className="absolute top-0 right-0 p-4" onClick={closeModal}>Close</button>
                    <h2 className="text-2xl font-bold mb-4">Student Details</h2>
                    <p className="text-lg mb-2"><strong>Index 2:</strong> {selectedStudent[2]}</p>
                    <p className="text-lg mb-2"><strong>Index 3:</strong> {selectedStudent[3]}</p>
                    <p className="text-lg mb-2"><strong>Percentage:</strong> {percentage}%</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
