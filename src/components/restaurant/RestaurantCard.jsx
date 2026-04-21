import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="group cursor-pointer block transform hover:scale-[0.98] transition-transform duration-200">
      <div className="relative rounded-2xl overflow-hidden h-[200px] mb-3">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Promoted Tag */}
        {restaurant.promoted && (
          <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-[10px] font-bold px-2 py-1 rounded">
            PROMOTED
          </div>
        )}
        
        {/* Offer Text Overlay */}
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-xl font-extrabold truncate max-w-[200px]">{restaurant.name}</h3>
        </div>
      </div>

      <div className="px-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span>{restaurant.rating}</span>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            • {restaurant.deliveryTime} mins
          </span>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm truncate">
          {restaurant.cuisines.join(', ')}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {restaurant.location} • {restaurant.distance}
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
