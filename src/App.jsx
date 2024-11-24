import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideLayout from './Components/SideHeader';
import Dashboard from './Components/dashboard/Dashboard';
import  Calendar  from './Components/Calender/Calender';
import ProductGrid from './Components/Ecommerce/ecommerce';
import ChatInterface from './Components/chats/chat';

import UserListDemo from './Components/User/User';

import Utabale from './Components/Table-List/Utabale';
import LMap from './Components/Maps/LMap';

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
<Route path="/utable" element={<Utabale/>} />
<Route path="/map" element={<LMap/>} />



            </Routes>
          
                  </main>
      </div>
    </Router>
  );
};

export default App;