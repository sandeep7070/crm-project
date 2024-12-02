import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';

const TableList = () => {
  const [users, setUsers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3000/api/v1/users/getAllUsers");
        
        console.log("Full response:", response);

        const usersData = response.data?.users || response.data || [];
        // Ensure unique users and clean data
        const uniqueUsers = usersData.filter(
          (user, index, self) => 
            index === self.findIndex((u) => u.email === user.email)
        );

        setUsers(uniqueUsers);
      } catch (err) {
        setError('problem fetching users');
        console.error('problem fetching users:', err);
      } finally {
        setLoading(false);
      }                           
    };

    fetchUsers();
  }, []); 

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };


  // Sort data based on current configuration   
  const sortedData = React.useMemo(() => {
    if (!users.length) return [];
    return [...users].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;                  
    });
  }, [users, sortConfig]);

  const filteredData = React.useMemo(() => {
    return sortedData.filter(user =>
      Object.values(user).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [sortedData, searchTerm]);

  // Render loading state
  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading users...
      </div>
    );
  }
  // Render error state
  if (error) {
    return (
      <div className="p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#182638] rounded-xl w-full shadow-lg h-full">
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
            <tr className="bg-[#2c4366] border-b border-slate-400">
              {['name', 'email', 'role', 'status'].map((key) => (
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
            {filteredData.length > 0 ? (
              filteredData.map((user) => (
                <tr key={user.id || Math.random()} className="hover:bg-slate-500 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {user.name || user.username || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {user.email || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {user.role || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-400 text-black' 
                        : 'bg-red-500 text-black'
                    }`}>
                      {user.status || 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-white">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;