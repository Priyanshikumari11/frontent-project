import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-200">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
