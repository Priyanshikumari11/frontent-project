import { categories } from '../../data/mockData';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

const CategoryList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-4 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-swiggy-black dark:text-white">What's on your mind?</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            <ChevronLeft className="w-5 h-5 dark:text-white" />
          </button>
          <button onClick={() => scroll('right')} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            <ChevronRight className="w-5 h-5 dark:text-white" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 lg:px-0 snap-x"
      >
        {categories.map((item) => (
          <div key={item.id} className="min-w-[120px] flex flex-col items-center gap-2 snap-start shrink-0 cursor-pointer group">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-swiggy-orange transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
