import React, { useState } from 'react';

function Reports() {
  const [showTable, setShowTable] = useState(false);

  const handleGenerate = () => {
    setShowTable(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Report</h1>
      <h2 className="text-lg text-gray-600 mb-6">Analyse / Report</h2>

      {/* Input Card */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm mb-6">
  <div className="flex flex-col">
    <label className="text-sm text-gray-700 mb-1">Subject</label>
    <select className="p-2 border border-gray-300 rounded w-48 focus:border-gray-400 focus:outline-none focus:ring-0">
      <option>Advanced Java</option>
      {/* Add more subjects here */}
    </select>
  </div>

  <div className="flex flex-col">
    <label className="text-sm text-gray-700 mb-1">Section</label>
    <select className="p-2 border border-gray-300 rounded w-24 focus:border-gray-400 focus:outline-none focus:ring-0">
      <option>A</option>
      {/* Add more sections here */}
    </select>
  </div>

    <div className="flex flex-col">
    <label className="text-sm text-gray-700 mb-1">Month</label>
    <select className="p-2 border border-gray-300 rounded w-32 focus:border-gray-400 focus:outline-none focus:ring-0">
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label className="text-sm text-gray-700 mb-1">Year</label>
    <select className="p-2 border border-gray-300 rounded w-28 focus:border-gray-400 focus:outline-none focus:ring-0">
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
    </select>
  </div>

  <button
    onClick={handleGenerate}
    className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
  >
    Generate Sheet
  </button>
</div>

      {/* Attendance Table */}
      {showTable && (
        <>
          <table className="w-full bg-white rounded shadow">
   <thead>
    <tr className="bg-gray-200">
      <th className="p-2 text-left">#</th>
      <th className="p-2 text-left">Student Name</th>
     
      <th className="p-2 text-left">Semester</th>
      <th className="p-2 text-left">Total Present Day</th>
      <th className="p-2 text-left">Total Absence Day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 px-4">1</td>
      <td className="p-2">Maria</td>
      
      <td className="p-2">First</td>
      <td className="p-2">10</td>
      <td className="p-2">2</td>
    </tr>
    <tr>
      <td className="p-2 px-4">2</td>
      <td className="p-2">Maria</td>
      
      <td className="p-2">First</td>
      <td className="p-2">2</td>
      <td className="p-2">10</td>
    </tr>
  </tbody>
</table>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default Reports;
