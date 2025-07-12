import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import ScrollToTop from './Components/ScrolltoTop';

// Pages and Components
import Home from './Pages/Home';
import Services from './Pages/Services';
import InquiryForm from './Pages/InquiryForm';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import AdminLoginProtectedDashboard from './Pages/AdminLoginProtectedDashboard.jsx';

// Layout for public pages (with navbar)
const Layout = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
  </>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/inquiryform', element: <InquiryForm /> },
      { path: '/aboutus', element: <Aboutus /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLoginProtectedDashboard />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
