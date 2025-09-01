import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ProfilePage from './Pages/profile/ProfilePage';
import SignupPage from './Pages/auth/SignupPage';
import LoginPage from './Pages/auth/LoginPage';
import NotifyPage from './Pages/Notification/NotifyPage';
import DashboardPage from './Pages/Home/DashboardPage';
import TablePage from './Pages/table/TablePage'
const App = () => {
  return (
    <BrowserRouter >
        <Routes>
           <Route index element={<SignupPage />} />
           <Route path='login' element={<LoginPage />} />
            <Route path='/' element={ <Layout /> }>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='notification' element={<NotifyPage />} />
            <Route path='tables' element={<TablePage />} />
           
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;