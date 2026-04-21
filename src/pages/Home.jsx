import Carousel from '../components/home/Carousel';
import CategoryList from '../components/home/CategoryList';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import { restaurants } from '../data/mockData';

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <Carousel />
      <CategoryList />
      
      <div className="py-8 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-swiggy-black dark:text-white mb-6">
          Restaurants with online food delivery in Delhi
        </h2>
        
        {/* Basic Filter Bar Mock */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide py-2">
          {['Filter', 'Sort By', 'Fast Delivery', 'New on FoodExpress', 'Ratings 4.0+', 'Pure Veg', 'Offers', 'Rs. 300-Rs. 600', 'Less than Rs. 300'].map((filter) => (
            <button key={filter} className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
