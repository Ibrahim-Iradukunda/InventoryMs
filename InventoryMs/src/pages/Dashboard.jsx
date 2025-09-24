import React from 'react';
import AttendanceBarRechart from '../components/ChartComponent';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';

// Radar chart data
const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Java', A: 98, B: 130, fullMark: 150 },
  { subject: 'Physics', A: 86, B: 130, fullMark: 150 },
  { subject: 'Chemistry', A: 99, B: 100, fullMark: 150 },
  { subject: 'Biology', A: 85, B: 90, fullMark: 150 },
  { subject: 'English', A: 65, B: 85, fullMark: 150 },
];

// Line chart data
const lineData = [
  { name: 'Week 1', Attendance: 85 },
  { name: 'Week 2', Attendance: 90 },
  { name: 'Week 3', Attendance: 80 },
  { name: 'Week 4', Attendance: 88 },
];

function Dashboard() {
  return (
    <div className="p-6">
      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <h2 className="text-lg text-gray-600 mb-6">Home / Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Present Today */}
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xs font-semibold text-blue-600 mb-4">
            <span className="font-bold text-sm">Present</span> | <span className="text-gray-400">Today</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-blue-600">140</div>
              <div className="text-xs text-gray-400">12% Increased</div>
            </div>
          </div>
        </div>

        {/* Absent Today */}
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xs font-semibold text-blue-600 mb-4">
            <span className="font-bold text-sm">Absent</span> | <span className="text-gray-400">Today</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-blue-600">25</div>
              <div className="text-xs text-gray-400">12% Decreased</div>
            </div>
          </div>
        </div>

        {/* Attendance Rate */}
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xs font-semibold text-blue-600 mb-4">
            <span className="font-bold text-sm">Attendance</span> | <span className="text-gray-400">This Month</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-xs text-gray-400">12% Increased</div>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-white rounded-md shadow-sm p-4">
          <h2 className="text-xs font-semibold text-blue-600 mb-4">
            <span className="font-bold text-sm">Attendance Report</span> | <span className="text-gray-400">This Month</span>
          </h2>
          <div className="h-32 rounded">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="A" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.6} />
                <Radar name="B" dataKey="B" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.3} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-sm font-semibold mb-3"> <span className="font-bold text-sm text-blue-600">Report </span> <span className="text-gray-400"> | Today</span></h2>
          <div className="h-56 rounded ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Attendance" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
