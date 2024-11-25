import { useEffect, useState } from 'react';
import { UserPlus, Trash2, Edit, Mail, User, Search } from 'lucide-react';
import axios from 'axios';
const UserListDemo = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'sandeep', email: 'hlo@gmail.com' },
    { id: 2, name: 'hlow word', email: 'hii@gmail.com' }
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '' });


  useEffect(() => {
    const fetchUsers = async () => {
      
      try {
        const response = await axios.get('https://api.freeapi.app/api/v1/public/randomjokes');
        console.log("response", response)
        setUsers(response.data);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
    fetchUsers();
  }, []);




  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ name: '', email: '' });
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">
            Users
            <span className="text-emerald-400">.</span>
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Add User Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Add New User</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
          <button
            onClick={addUser}
            className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
          >
            <UserPlus size={20} />
            Add User
          </button>
        </div>

        {/* User List */}
        <div className="grid gap-4">
          {users.map(user => (
            <div 
              key={user.id} 
              className="group bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-emerald-500 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <User className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{user.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Mail size={14} />
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors">
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => deleteUser(user.id)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListDemo;