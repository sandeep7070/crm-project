import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideLayout from './Components/SideHeader.jsx';
import Dashboard from './Components/dashboard/Dashboard.jsx';
import  Calendar  from './Components/Calender/Calender.jsx';
import ProductGrid from './Components/Ecommerce/ecommerce.jsx';
import ChatInterface from './Components/chats/Chat.jsx';

import UserListDemo from './Components/User/User.jsx';

import TableList from './Components/Table-List/TaBleS.jsx';

import MapTable from './Components/Maps/AMap.jsx';

import SimpleSalesChart from './Components/ChartTable/Charttable.jsx';
import CardsCollection from './Components/Cards/Hcard.jsx';
import Slogout from './Components/Logout/Slogout.jsx';


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
            <Route path="/users" element={<UserListDemo />} /> 
            <Route path="/table" element={<TableList/>} />
            <Route path="/map" element={<MapTable />} />
            <Route path="/chart-table" element={<SimpleSalesChart />} />
            <Route path="/card" element={<CardsCollection />} />
            <Route path="/logout" element={<Slogout/>} />
            
            </Routes>
          
                  </main>
      </div>
    </Router>
  );
};

export default App;