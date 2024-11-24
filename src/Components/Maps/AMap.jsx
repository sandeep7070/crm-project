import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const DataTable = () => {
  // Sample data - replace with your actual data
  const initialData = [
    { id: 1, name: "John Doe", age: 28, city: "New York", role: "Developer" },
    { id: 2, name: "Jane Smith", age: 32, city: "San Francisco", role: "Designer" },
    { id: 3, name: "Bob Johnson", age: 45, city: "Chicago", role: "Manager" },
    { id: 4, name: "Alice Brown", age: 26, city: "Boston", role: "Developer" },
    { id: 5, name: "Charlie Wilson", age: 38, city: "Seattle", role: "Analyst" }
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) {
      return <div className="w-4 h-4" />;
    }
    return sortConfig.direction === 'ascending' ? 
      <ChevronUp className="w-4 h-4" /> : 
      <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className="w-full  mx-auto p-4 bg-[#182638] h-full ">
      <div className="bg-[#2c4366] shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="">
              <tr>
                {Object.keys(initialData[0]).map((column) => (
                  <th 
                    key={column}
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-slate-500"
                    onClick={() => sortData(column)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{column}</span>
                      {getSortIcon(column)}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#2c4366] divide-y divide-slate-500  text-white  ">
              {data.map((row) => (
                <tr 
                  key={row.id}
                  className="hover:bg-slate-500 transition-colors"
                >
                  {Object.values(row).map((cell, index) => (
                    <td 
                      key={index}
                      className="px-6 py-4 whitespace-nowrap text-sm text-white"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;