import { User, Heart, ShoppingBag, MapPin, ChevronRight, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-0 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 min-h-[70vh]">
      {/* Sidebar */}
      <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-800 pr-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1 text-swiggy-black dark:text-white">Aman Gupta</h1>
          <p className="text-sm text-gray-500">+91 9876543210</p>
        </div>
        
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-swiggy-black dark:text-white font-bold">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              Orders
            </div>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium transition-colors">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5" />
              Favorites
            </div>
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              Addresses
            </div>
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium transition-colors mt-8 text-red-500 hover:text-red-600">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              Logout
            </div>
          </a>
        </nav>
      </div>

      {/* Content */}
      <div className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-6 text-swiggy-black dark:text-white">Past Orders</h2>
        
        <div className="flex flex-col gap-6">
          {/* Order Mock */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900">
            <div className="flex justify-between items-start mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="flex gap-4">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop" className="w-16 h-16 rounded-lg object-cover" alt="Restaurant" />
                <div>
                  <h3 className="font-bold text-lg text-swiggy-black dark:text-white">Domino's Pizza</h3>
                  <p className="text-xs text-gray-500">Karol Bagh • ₹498 for 2 items</p>
                  <p className="text-xs text-gray-500 mt-1">12 Oct 2026 at 8:30 PM</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Delivered</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              1 x Margherita Pizza, 1 x Pepperoni Pizza
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-2 border border-swiggy-orange text-swiggy-orange font-bold text-sm uppercase rounded hover:bg-swiggy-orange hover:text-white transition-colors">Reorder</button>
              <button className="flex-1 py-2 border border-gray-300 dark:border-gray-700 font-bold text-sm uppercase rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Help</button>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-900">
            <div className="flex justify-between items-start mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
              <div className="flex gap-4">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop" className="w-16 h-16 rounded-lg object-cover" alt="Restaurant" />
                <div>
                  <h3 className="font-bold text-lg text-swiggy-black dark:text-white">Burger King</h3>
                  <p className="text-xs text-gray-500">Connaught Place • ₹248 for 2 items</p>
                  <p className="text-xs text-gray-500 mt-1">05 Oct 2026 at 1:15 PM</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Delivered</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              1 x Whopper, 1 x Fries (Large)
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-2 border border-swiggy-orange text-swiggy-orange font-bold text-sm uppercase rounded hover:bg-swiggy-orange hover:text-white transition-colors">Reorder</button>
              <button className="flex-1 py-2 border border-gray-300 dark:border-gray-700 font-bold text-sm uppercase rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Help</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
