import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';

const OrderStats = () => {
  const activityData = [
    { day: 'Mon', current: 20, previous: 40 },
    { day: 'Tue', current: 45, previous: 30 },
    { day: 'Wed', current: 85, previous: 45 },
    { day: 'Thu', current: 55, previous: 55 },
    { day: 'Fri', current: 50, previous: 45 },
    { day: 'Sat', current: 55, previous: 48 }
  ];

  const orderData = [
    { name: 'Completed', value: 70, color: '#22C55E' },
    { name: 'Pending', value: 25, color: '#EAB308' },
    { name: 'Cancel', value: 19, color: '#EF4444' }
  ];

  const topProducts = [
    { id: 1, name: 'Polo blue T-shirt', price: '25.4', sales: '3.82k', trend: 'up' },
    { id: 2, name: 'Hoodie for men', price: '24.5', sales: '3.14k', trend: 'down' },
    { id: 3, name: 'Red color Cap', price: '22.5', sales: '2.84k', trend: 'up' },
    { id: 4, name: 'Pocket T-shirt', price: '21.5', sales: '2.06k', trend: 'down' }
  ];

  return (
    <div className="p-6 bg-[#182638]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Activity Card */}
        <div className="bg-[#2c4366]  rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white text-sm font-medium">User Activity</h3>
              <div className="text-3xl font-bold text-white mt-1">16,543</div>
              <div className="text-xs text-white mt-1">This Month</div>
            </div>
            <select className="px-3 py-1 rounded-lg bg-[#2c4366] border text-sm text-white">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="h-48">
            <LineChart width={300} height={180} data={activityData}>
              <Line 
                type="natural"
                dataKey="current" 
                stroke="#4F46E5" 
                strokeWidth={2.5}
                dot={false}
              />
              <Line 
                type="natural"
                dataKey="previous" 
                stroke="#E0E7FF" 
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </div>
        </div>

        {/* Order Stats Card */}
        <div className="bg-[#2c4366] rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-sm font-medium">Order Stats</h3>
            <button className="p-2 hover:bg-[#2c4366] rounded-lg transition-colors">
              <MoreHorizontal className="text-white w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <PieChart width={180} height={180}>
              <Pie
                data={orderData}
                innerRadius={55}
                outerRadius={70}
                dataKey="value"
                strokeWidth={0}
              >
                {orderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {orderData.map(item => (
              <div key={item.name} className="text-center">
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-white">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Card */}
        <div className=" bg-[#2c4366] rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-sm font-medium">Top Products</h3>
            <select className="px-3 py-1 rounded-lg bg-[#2c4366] border text-sm text-white">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 rounded-xl bg-[#2c4366] hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-200 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 font-medium">
                    #{product.id}
                  </div>
                  <div>
                    <div className="font-medium text-white">{product.name}</div>
                    <div className="text-white text-sm">${product.price}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right px-3 py-1 rounded-lg bg-[#2c4366] text-white">
                    {product.sales}
                  </div>
                  {product.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStats;