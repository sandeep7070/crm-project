import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideLayout from './Components/SideHeader';
import Dashboard from './Components/dashboard/Dashboard';
import  Calendar  from './Components/Calender/Calender';
import ProductGrid from './Components/Ecommerce/ecommerce';
import UsersListComponent from './Components/User/UserList';
import ChatInterface from './Components/chats/chat';
import DataTable from './Components/Table-List/Table';

const App = () => {
console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <Router>
      <div className="flex min-h-screen">
        <SideLayout />
        {/* Your main content/routes go here */}
        <main className="flex-1">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/Chat" element={<ChatInterface />} />
            <Route path="/ecommerce" element={<ProductGrid />} />
            <Route path="/userList" element={<UsersListComponent />} />
            <Route path="/Tablelist" element={<DataTable />} />


            </Routes>
          
                  </main>
      </div>
    </Router>
  );
};

export default App;