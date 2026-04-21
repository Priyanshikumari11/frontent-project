import { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import { restaurants, categories } from '../data/mockData';

const Search = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Simple search & filter logic
  const filteredRestaurants = restaurants.filter(res => {
    const matchesQuery = res.name.toLowerCase().includes(query.toLowerCase()) || 
                         res.cuisines.some(c => c.toLowerCase().includes(query.toLowerCase()));
    
    if (!matchesQuery) return false;

    if (activeFilter === 'Veg') return res.veg;
    if (activeFilter === 'Rating 4.5+') return res.rating >= 4.5;
    if (activeFilter === 'Fast Delivery') return parseInt(res.deliveryTime.split('-')[0]) <= 25;
    
    return true;
  });

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 min-h-[70vh]">
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Search for restaurants and food" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-14 pl-4 pr-12 text-lg border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-swiggy-orange dark:bg-gray-800 dark:text-white shadow-sm transition-colors"
        />
        {query ? (
          <X 
            className="absolute right-4 top-4 text-gray-400 cursor-pointer hover:text-gray-600" 
            onClick={() => setQuery('')}
          />
        ) : (
          <SearchIcon className="absolute right-4 top-4 text-gray-400" />
        )}
      </div>

      {!query && (
        <div className="mb-10">
          <h3 className="font-bold text-xl mb-4 text-swiggy-black dark:text-white">Popular Cuisines</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
            {categories.map(cat => (
              <div key={cat.id} className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer" onClick={() => setQuery(cat.name)}>
                <img src={cat.image} alt={cat.name} className="w-16 h-16 rounded-full object-cover" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide py-2">
        {['All', 'Veg', 'Rating 4.5+', 'Fast Delivery'].map(filter => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-swiggy-black text-white border-swiggy-black dark:bg-white dark:text-black dark:border-white' 
                : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div>
        <h2 className="font-bold text-xl mb-6 text-swiggy-black dark:text-white">
          {filteredRestaurants.length} Restaurant{filteredRestaurants.length !== 1 && 's'} found
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
