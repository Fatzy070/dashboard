import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './layout/Layout';
import Profile from './components/Home/Profile';

const App = () => {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={ <Layout /> }>
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;