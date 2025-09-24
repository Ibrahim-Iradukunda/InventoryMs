import React, { useState } from 'react';

function Attendance() {
  const [showTable, setShowTable] = useState(false);

  const handleGenerate = () => {
    setShowTable(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Attendance</h1>
      <h2 className="text-lg text-gray-600 mb-6">Track / Attendance</h2>

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
    <label className="text-sm text-gray-700 mb-1">Date</label>
    <input
      type="date"
      className="p-2 border border-gray-300 rounded w-40 focus:border-gray-400 focus:outline-none focus:ring-0"
    />
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
      <th className="p-2 text-left">Student ID</th>
      <th className="p-2 text-left">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 px-4 flex items-center gap-2">
        <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
        <span>1</span>
      </td>
      <td className="p-2">John Doe</td>
      <td className="p-2">STU12345</td>
      <td className="p-2">
        <select className="border p-1 rounded">
          <option>Present</option>
          <option>Absent</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="p-2 px-4 flex items-center gap-2">
        <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
        <span>2</span>
      </td>
      <td className="p-2">John Doe</td>
      <td className="p-2">STU12346</td>
      <td className="p-2">
        <select className="border p-1 rounded">
          <option>Present</option>
          <option>Absent</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="p-2 px-4 flex items-center gap-2">
        <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
        <span>3</span>
      </td>
      <td className="p-2">John Doe</td>
      <td className="p-2">STU12347</td>
      <td className="p-2">
        <select className="border p-1 rounded">
          <option>Present</option>
          <option>Absent</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="p-2 px-4 flex items-center gap-2">
        <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
        <span>4</span>
      </td>
      <td className="p-2">John Doe</td>
      <td className="p-2">STU12348</td>
      <td className="p-2">
        <select className="border p-1 rounded">
          <option>Present</option>
          <option>Absent</option>
        </select>
      </td>
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

export default Attendance;
