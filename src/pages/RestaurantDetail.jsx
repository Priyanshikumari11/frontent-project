import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurants } from '../data/mockData';
import { addToCart, removeFromCart } from '../features/cartSlice';

const RestaurantDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return <div className="text-center py-20 text-2xl font-bold">Restaurant not found</div>;
  }

  const getItemQuantity = (menuId) => {
    const item = cartItems.find(item => item.menuId === menuId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (menuItem) => {
    dispatch(addToCart({
      menuId: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      restaurantId: restaurant.id,
      image: menuItem.image,
      veg: menuItem.veg
    }));
  };

  const handleRemoveFromCart = (menuId) => {
    dispatch(removeFromCart(menuId));
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-0 py-8">
      {/* Breadcrumb mock */}
      <div className="text-xs text-gray-500 mb-8">
        Home / {restaurant.location} / <span className="text-gray-900 dark:text-gray-200 font-medium">{restaurant.name}</span>
      </div>

      {/* Restaurant Header */}
      <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-2xl font-bold text-swiggy-black dark:text-white mb-2">{restaurant.name}</h1>
          <p className="text-sm text-gray-500 mb-1">{restaurant.cuisines.join(', ')}</p>
          <p className="text-sm text-gray-500">{restaurant.location}, {restaurant.distance}</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-2 flex flex-col items-center justify-center">
          <div className="flex items-center gap-1 text-green-600 font-bold mb-2 pb-2 border-b border-gray-200 dark:border-gray-700 w-full justify-center">
            <Star className="w-4 h-4 fill-current" />
            <span>{restaurant.rating}</span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium tracking-tighter">10K+ ratings</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 text-gray-800 dark:text-gray-200 font-bold">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>{restaurant.deliveryTime} MINS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">₹</span>
          <span>{restaurant.costForTwo}</span>
        </div>
      </div>

      {/* Menu Filter Mock */}
      <div className="flex items-center gap-4 mb-8 relative">
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl h-12 flex items-center px-4">
          <input type="text" placeholder="Search for dishes" className="bg-transparent border-none outline-none w-full text-sm" />
          <Search className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex items-center gap-2 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-xl h-12 px-4 cursor-pointer">
          <span className="w-3 h-3 border border-green-600 flex items-center justify-center rounded-sm"><span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span></span>
          Veg Only
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <h2 className="font-bold text-xl mb-6">Recommended ({restaurant.menu.length})</h2>
        <div className="flex flex-col">
          {restaurant.menu.map((item) => (
            <div key={item.id} className="flex justify-between py-8 border-b border-gray-200 dark:border-gray-800 last:border-0">
              <div className="w-[60%]">
                <div className={`w-4 h-4 border flex items-center justify-center rounded-sm mb-2 ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`}></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{item.name}</h3>
                <p className="text-gray-800 dark:text-gray-300 font-medium text-sm mt-1 mb-3">₹{item.price}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
              </div>
              <div className="relative w-[118px] h-[96px] md:w-[156px] md:h-[144px]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-500 font-extrabold shadow-md rounded-lg w-24 h-9 flex items-center justify-center border border-gray-200 dark:border-gray-700 overflow-hidden text-sm uppercase">
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex w-full h-full">
                      <button onClick={() => handleRemoveFromCart(item.id)} className="flex-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">-</button>
                      <span className="flex-1 flex items-center justify-center text-black dark:text-white font-bold">{getItemQuantity(item.id)}</span>
                      <button onClick={() => handleAddToCart(item)} className="flex-1 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">+</button>
                    </div>
                  ) : (
                    <button onClick={() => handleAddToCart(item)} className="w-full h-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">ADD</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
