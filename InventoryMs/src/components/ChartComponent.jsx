import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'John', Present: 4, Absent: 1 },
  { name: 'Jane', Present: 5, Absent: 0 },
  { name: 'Alex', Present: 3, Absent: 2 },
  { name: 'Sara', Present: 4, Absent: 1 },
];

function BarRechart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Present" fill="#2563eb" />
        <Bar dataKey="Absent" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarRechart;