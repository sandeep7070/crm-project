import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Banknote, Users, TrendingUp, ShoppingCart } from 'lucide-react';
import OrderStuts from './OrdersDas';
import DashboardProfile from './PorfileDas';

const dashboardData = {
  revenue: [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 2000 },
    { month: 'Jun', sales: 2500 },
    { month: 'Jul', sales: 4000 },
    { month: 'Aug', sales: 1000 },
    { month: 'Sep', sales: 4000 },
    { month: 'Oct', sales: 2000 },
    { month: 'Nov', sales: 5500 },
    { month: 'Dec', sales: 3000 }

  ],
  metrics: [
    { 
      icon: <Banknote />, 
      title: 'Total Revenue', 
      value: '$45,230',
      bgColor: 'bg-indigo-600',
      textColor: 'text-indigo-100' 
    },
    { 
      icon: <Users />, 
      title: 'New Customers', 
      value: '1,245',
      bgColor: 'bg-emerald-600',
      textColor: 'text-emerald-100' 
    },
    { 
      icon: <TrendingUp />, 
      title: 'Growth Rate', 
      value: '15.5%',
      bgColor: 'bg-rose-600',
      textColor: 'text-rose-100' 
    },
    { 
      icon: <ShoppingCart />, 
      title: 'Total Orders', 
      value: '3,672',
      bgColor: 'bg-amber-600',
      textColor: 'text-amber-100' 
    }
  ]
};

const Dashboard = () => {
  return (
    <div className="p-8 bg-[#182638]">
      <div className="bg-[#182638] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardData.metrics.map((metric, index) => (
          <div 
            key={index} 
            className={`${metric.bgColor} rounded-xl p-6 shadow-xl transform transition hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 ${metric.textColor} bg-white/10 rounded-full`}>
                {React.cloneElement(metric.icon, { size: 28 })}
              </div>
              <div className="text-right">
                <p className="opacity-75 text-sm mb-1">{metric.title}</p>
                <h3 className="text-2xl font-bold">{metric.value}</h3>
              </div>
            </div>
          </div>
        ))}

      </div>
      
      <div className="bg-[#2c4366] rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">Sales Performance</h2>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dashboardData.revenue}>
              <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
              <XAxis axisLine={{ stroke: '#4B5563' }} tick={{ fill: 'white' }} dataKey="month" />
              <YAxis axisLine={{ stroke: '#4B5563' }} tick={{ fill: 'white' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} 
                itemStyle={{ color: 'white' }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <OrderStuts/>
      <DashboardProfile/>
    </div>
  );
};

export default Dashboard;