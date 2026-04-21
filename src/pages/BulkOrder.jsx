import { useState } from 'react';
import { Users, Calendar, Link as LinkIcon, PieChart, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

const BulkOrder = () => {
  const [activeTab, setActiveTab] = useState('group'); // group, corporate
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);

  return (
    <div className="max-w-[1000px] mx-auto px-4 lg:px-0 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-swiggy-black dark:text-white mb-4">Bulk & Group Orders</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto">
          Planning a party, office lunch, or a get-together? We've got you covered with multi-restaurant ordering, split bills, and scheduled deliveries.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-xl flex gap-2">
          <button 
            onClick={() => setActiveTab('group')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'group' ? 'bg-white dark:bg-gray-700 shadow-sm text-swiggy-black dark:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Group Order
          </button>
          <button 
            onClick={() => setActiveTab('corporate')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'corporate' ? 'bg-white dark:bg-gray-700 shadow-sm text-swiggy-black dark:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Corporate Enquiry
          </button>
        </div>
      </div>

      {activeTab === 'group' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[rgba(0,0,0,0.05)_0_10px_20px] border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Users className="text-swiggy-orange" />
              Start a Group Order
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Event Name</label>
                <input type="text" placeholder="e.g., Friday Office Lunch" className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Delivery Time</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange appearance-none">
                    <option>Today, 1:00 PM</option>
                    <option>Today, 8:00 PM</option>
                    <option>Tomorrow, 1:00 PM</option>
                    <option>Custom Schedule...</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Bill Splitting</label>
                <div className="flex gap-4">
                  <label className="flex-1 border border-swiggy-orange bg-swiggy-orange/10 rounded-xl p-4 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-2 right-2"><CheckCircle2 className="w-4 h-4 text-swiggy-orange" /></div>
                    <PieChart className="w-6 h-6 text-swiggy-orange mb-2" />
                    <span className="font-bold block text-sm">Split Bill</span>
                    <span className="text-xs text-gray-500">Everyone pays their share</span>
                  </label>
                  <label className="flex-1 border border-gray-200 dark:border-gray-700 rounded-xl p-4 cursor-pointer hover:border-gray-300">
                    <Users className="w-6 h-6 text-gray-500 mb-2" />
                    <span className="font-bold block text-sm">Host Pays</span>
                    <span className="text-xs text-gray-500">You pay for everyone</span>
                  </label>
                </div>
              </div>

              {!isLinkGenerated ? (
                <button 
                  onClick={() => setIsLinkGenerated(true)}
                  className="w-full h-12 bg-swiggy-orange text-white font-bold rounded-xl hover:bg-swiggy-orange-dark transition-colors flex items-center justify-center gap-2"
                >
                  <LinkIcon className="w-5 h-5" />
                  Generate Invite Link
                </button>
              ) : (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                  <p className="text-sm text-green-800 dark:text-green-400 font-bold mb-2">Link Generated!</p>
                  <div className="flex gap-2">
                    <input type="text" readOnly value="https://foodexpress.com/group/x8f92j" className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 text-sm focus:outline-none" />
                    <button className="bg-swiggy-black text-white px-4 py-2 rounded-lg font-bold text-sm">Copy</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                <span className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-200 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                Multi-Restaurant Cart
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-400">Add items from different restaurants to a single group cart. We will coordinate the delivery.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
              <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
                <span className="bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-200 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                Priority Delivery
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-400">Bulk orders get assigned to our top-rated delivery partners for a seamless experience.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
              <h3 className="font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2">
                <span className="bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-200 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                Bulk Discounts
              </h3>
              <p className="text-sm text-green-800 dark:text-green-400">Automatic discounts applied on orders above ₹2000. Up to 30% off.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'corporate' && (
        <div className="max-w-[600px] mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[rgba(0,0,0,0.05)_0_10px_20px] border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-swiggy-orange/10 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-swiggy-orange" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Partner with us</h2>
              <p className="text-gray-500 text-sm">Fill out the form and our team will get back to you.</p>
            </div>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
              <input type="text" className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Official Email</label>
              <input type="email" className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Estimated Monthly Spend (₹)</label>
              <select className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:border-swiggy-orange">
                <option>Less than 10,000</option>
                <option>10,000 - 50,000</option>
                <option>50,000 - 1,00,000</option>
                <option>1,00,000+</option>
              </select>
            </div>
            <button className="w-full h-12 bg-swiggy-black text-white font-bold rounded-xl mt-4 hover:bg-black transition-colors flex items-center justify-center gap-2">
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BulkOrder;
