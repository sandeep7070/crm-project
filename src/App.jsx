import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideLayout from './Components/SideHeader.jsx';
import Dashboard from './Components/dashboard/Dashboard.jsx';
import Calendar from './Components/Calender/Calender.jsx';
import ProductGrid from './Components/Ecommerce/ecommerce.jsx';
import ChatInterface from './Components/chats/Chat.jsx';
import UserListDemo from './Components/User/User.jsx';
import TableList from './Components/Table-List/TaBleS.jsx';
import MapTable from './Components/Maps/AMap.jsx';
import SimpleSalesChart from './Components/ChartTable/Charttable.jsx';
import CardsCollection from './Components/Cards/Hcard.jsx';
import Slogout from './Components/Logout/Slogout.jsx';
import AuthPage from './Components/Login-page/loginPage.jsx';
import ProductDetails from './Components/Ecommerce/iphoneProduct/iphoneDetails.jsx';

const App = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (

    <Router>
      <Routes>
        {!isAuthenticated ? (
          
          <Route 
            path="/" 
            element={<AuthPage onLoginSuccess={handleLogin} />} 
          />
        ) : (
          <Route 
  path="*" 
  element={
    <div className="flex min-h-screen">
      <SideLayout />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ecommerce" element={<ProductGrid />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/Chat" element={<ChatInterface />} />
          <Route path="/users" element={<UserListDemo />} /> 
          <Route path="/table" element={<TableList/>} />
          <Route path="/map" element={<MapTable />} />
          <Route path="/chart-table" element={<SimpleSalesChart />} />
          <Route path="/card" element={<CardsCollection />} />
          <Route path="/logout" element={<Slogout/>} />
        </Routes>
        
                </main>
              </div>
            } 
          />
        )}
        {/* <ProductDetails/>    */}
      </Routes>
    </Router>
    
  );
};

export default App;