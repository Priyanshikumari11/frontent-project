import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold">FoodExpress</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            © 2026 FoodExpress Technologies Pvt. Ltd
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-xs">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
              <span className="text-xs">TW</span>
            </div>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
            <li><Link to="/bulk-order" className="hover:text-swiggy-orange transition-colors">Corporate Orders</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact us</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><Link to="/help" className="hover:text-white transition-colors">Help & Support</Link></li>
            <li><Link to="/partner" className="hover:text-white transition-colors">Partner with us</Link></li>
            <li><Link to="/ride" className="hover:text-white transition-colors">Ride with us</Link></li>
          </ul>
        </div>

        {/* Links 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
