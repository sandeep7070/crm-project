import React, { useState } from 'react';
import { Search, User, MoreVertical } from 'lucide-react';

const UsersListComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const usersData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', role: 'User', status: 'Active' },
  ];

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-indigo-500" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3 border-2 border-indigo-100 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="divide-y divide-gray-100">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-6 hover:bg-indigo-50 transition-colors duration-200 cursor-pointer flex items-center justify-between group"
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center space-x-5">
                <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-indigo-200 transition-colors duration-200">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {user.status}
                </span>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg">
                  {user.role}
                </span>
                <button className="p-2 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl mt-6 shadow-lg">
          <p className="text-gray-500 text-lg">No users found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default UsersListComponent;