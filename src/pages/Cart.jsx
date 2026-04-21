import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MapPin, Info } from 'lucide-react';
import { addToCart, removeFromCart, clearCart } from '../features/cartSlice';
import { restaurants } from '../data/mockData';

const Cart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="max-w-[800px] mx-auto px-4 lg:px-0 py-20 flex flex-col items-center justify-center">
        <div className="w-[271px] h-[256px] bg-[url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0')] bg-cover mb-6"></div>
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-[300px]">You can go to home page to view more restaurants</p>
        <Link to="/" className="bg-swiggy-orange text-white font-bold px-6 py-3 rounded-md uppercase hover:bg-swiggy-orange-dark transition-colors">
          See Restaurants near you
        </Link>
      </div>
    );
  }

  const restaurantId = items[0].restaurantId;
  const restaurant = restaurants.find(r => r.id === restaurantId);

  const deliveryFee = 40;
  const taxes = Math.round(totalAmount * 0.05);
  const grandTotal = totalAmount + deliveryFee + taxes;

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-0 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Checkout Left Side */}
      <div className="col-span-2 flex flex-col gap-6">
        {/* Account Mock */}
        <div className="bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-200 dark:border-gray-700 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-swiggy-black dark:bg-white"></div>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <p className="text-gray-500 mb-4">To place your order now, log in to your existing account or sign up.</p>
          <div className="flex gap-4">
            <button className="border border-green-600 text-green-600 flex-1 py-2 font-bold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
              HAVE AN ACCOUNT?<br/><span className="text-sm font-medium">LOG IN</span>
            </button>
            <button className="bg-green-600 text-white flex-1 py-2 font-bold hover:bg-green-700 transition-colors">
              NEW TO FOODEXPRESS?<br/><span className="text-sm font-medium">SIGN UP</span>
            </button>
          </div>
        </div>

        {/* Address Mock */}
        <div className="bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-400">Delivery Address</h2>
          <div className="border border-dashed border-gray-300 dark:border-gray-700 p-4 flex items-start gap-4">
            <MapPin className="text-swiggy-orange shrink-0 mt-1" />
            <div>
              <h3 className="font-bold">Add new address</h3>
              <p className="text-sm text-gray-500 mt-1">Connaught Place, New Delhi, Delhi, India</p>
              <button className="mt-4 border border-green-600 text-green-600 px-6 py-2 font-bold text-sm uppercase">Add New</button>
            </div>
          </div>
        </div>

        {/* Payment Mock */}
        <div className="bg-white dark:bg-gray-800 p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-400">Payment</h2>
        </div>
      </div>

      {/* Cart Summary Right Side */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-fit">
        <Link to={`/restaurant/${restaurant?.id}`} className="flex items-start gap-4 mb-6 cursor-pointer group">
          <img src={restaurant?.image} alt={restaurant?.name} className="w-12 h-12 object-cover rounded-sm" />
          <div className="flex-1 border-b border-gray-900 dark:border-white pb-4 group-hover:border-swiggy-orange transition-colors">
            <h3 className="font-bold text-lg leading-tight group-hover:text-swiggy-orange transition-colors">{restaurant?.name}</h3>
            <p className="text-sm text-gray-500">{restaurant?.location}</p>
          </div>
        </Link>

        <div className="flex flex-col gap-4 mb-6 max-h-[40vh] overflow-y-auto scrollbar-hide">
          {items.map(item => (
            <div key={item.menuId} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 w-1/2">
                <div className={`w-3 h-3 border flex items-center justify-center shrink-0 ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`}></span>
                </div>
                <span className="truncate">{item.name}</span>
              </div>
              <div className="flex items-center border border-green-600 rounded bg-white text-green-600 h-7 text-xs font-bold w-[70px]">
                <button onClick={() => dispatch(removeFromCart(item.menuId))} className="flex-1 h-full hover:bg-gray-100">-</button>
                <span className="flex-1 h-full flex items-center justify-center">{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))} className="flex-1 h-full hover:bg-gray-100">+</button>
              </div>
              <div className="w-[50px] text-right text-gray-600 dark:text-gray-300">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Bill Details */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
          <h3 className="text-sm font-bold mb-3">Bill Details</h3>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Item Total</span>
            <span>₹{totalAmount}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Delivery Fee | {restaurant?.distance}</span>
            <span>₹{deliveryFee}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 pt-3 border-t border-gray-200 dark:border-gray-700">
            <span>GST and Restaurant Charges</span>
            <span>₹{taxes}</span>
          </div>
        </div>

        <div className="border-t-2 border-black dark:border-white pt-4 mt-4 flex justify-between font-bold text-lg uppercase">
          <span>To Pay</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
