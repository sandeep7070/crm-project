import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const TableList = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Designer', status: 'Inactive' },
  ];

  // Sorting function
  const sortData = (data) => {
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Handle sort
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Filter data based on search
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = sortData(filteredData);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-[#182638] rounded-xl shadow-lg h-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Users List</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#2c4366]">
          <thead>
            <tr className="bg-bg-[#2c4366] border-b border-slate-400">
              {Object.keys(data[0]).map(key => key !== 'id' && (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer hover:bg-slate-500"
                  onClick={() => requestSort(key)}
                >
                  <div className="flex items-center gap-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    {sortConfig.key === key && (
                      sortConfig.direction === 'asc' ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray">
            {sortedData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-500 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {item.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === 'Active' 
                      ? 'bg-green-400 text-black' 
                      : 'bg-red-500 text-black'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;