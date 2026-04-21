import { Link } from 'react-router-dom';
import { Search, Percent, HelpCircle, User, ShoppingCart, MapPin, ChevronDown } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo & Location */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-swiggy-orange rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-swiggy-black dark:text-white hidden sm:block tracking-tight">
              FoodExpress
            </span>
          </Link>

          <Link to="/tracking" className="hidden md:flex items-center gap-2 cursor-pointer group">
            <span className="font-bold text-swiggy-black dark:text-gray-200 border-b-2 border-swiggy-black dark:border-gray-200 group-hover:text-swiggy-orange group-hover:border-swiggy-orange transition-colors">
              Other
            </span>
            <span className="text-swiggy-gray dark:text-gray-400 text-sm truncate max-w-[150px]">
              New Delhi, India
            </span>
            <ChevronDown className="w-4 h-4 text-swiggy-orange" />
          </Link>
        </div>

        {/* Right Section: Nav Items */}
        <nav className="flex items-center gap-2 md:gap-6">
          <Link to="/search" className="nav-item group">
            <Search className="nav-icon group-hover:text-swiggy-orange transition-colors" />
            <span className="nav-text group-hover:text-swiggy-orange transition-colors">Search</span>
          </Link>
          <Link to="/offers" className="nav-item hidden lg:flex group">
            <Percent className="nav-icon group-hover:text-swiggy-orange transition-colors" />
            <span className="nav-text group-hover:text-swiggy-orange transition-colors">Offers</span>
          </Link>
          <Link to="/bulk-order" className="nav-item hidden md:flex group relative">
            <div className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-1 rounded animate-pulse">NEW</div>
            <User className="nav-icon group-hover:text-swiggy-orange transition-colors" />
            <span className="nav-text group-hover:text-swiggy-orange transition-colors">Bulk Order</span>
          </Link>
          <Link to="/profile" className="nav-item group">
            <User className="nav-icon group-hover:text-swiggy-orange transition-colors" />
            <span className="nav-text group-hover:text-swiggy-orange transition-colors">Sign In</span>
          </Link>
          <Link to="/cart" className="nav-item group relative">
            <ShoppingCart className="nav-icon group-hover:text-swiggy-orange transition-colors" />
            <span className="nav-text group-hover:text-swiggy-orange transition-colors">Cart</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-2 bg-swiggy-orange text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
