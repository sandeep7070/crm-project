import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SimpleSalesChart = () => {
  const data = [
    { month: 'Jan', sales: 400 },
    { month: 'Feb', sales: 500 },
    { month: 'Mar', sales: 350 },
    { month: 'Apr', sales: 600 },
    { month: 'May', sales: 480 },
    { month: 'Jun', sales: 520 },
  ];

  return (
    <div className="p-4 border rounded-lg bg-[#182638]">
      <h2 className="text-lg font-bold mb-4 text-white">Sales Chart</h2>
      <div className="h-64 text-white">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
                                          
      <div className="mt-4 overflow-x-auto bg-[#2c4366] text-white">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="text-left p-2 text-white">Month</th>
              <th className="text-right p-2 text-white">Sales</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.month}>
                <td className="p-2 text-white">{item.month}</td>
                <td className="text-right p-2 text-white">{item.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleSalesChart;