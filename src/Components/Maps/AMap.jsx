import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const DataTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3000/api/v1/users/getAllUsers");
        const data = await response.json();
        const usersData = data?.users || [];
        const uniqueUsers = usersData.filter(
          (user, index, self) => 
            index === self.findIndex((u) => u.id === user.id)
        );
        setUsers(uniqueUsers);
      } catch (err) {
        setError('Problem fetching users');
        console.error('Problem fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setUsers(sortedData);
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

  if (loading) {
    return <div className="w-full p-4 text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="w-full p-4 text-center text-red-500">{error}</div>;
  }

  if (!users.length) {
    return <div className="w-full p-4 text-center text-white">No users found</div>;
  }

  const columns = ['id', 'username', 'email'];

  return (
    <div className="w-full mx-auto p-4 bg-gray-900">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th 
                    key={column}
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-gray-700"
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
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {users.map((user) => (
                <tr 
                  key={user.id}
                  className="hover:bg-gray-700 transition-colors"
                >
                  {columns.map((column) => (
                    <td 
                      key={`${user.id}-${column}`}
                      className="px-6 py-4 whitespace-nowrap text-sm text-white"
                    >
                      {user[column]}
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