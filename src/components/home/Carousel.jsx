import { carouselData } from '../../data/mockData';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

const Carousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <div className="flex items-center justify-between mb-4 px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-swiggy-black dark:text-white">Best offers for you</h2>
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
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-0 snap-x"
      >
        {carouselData.map((item) => (
          <div key={item.id} className="min-w-[320px] md:min-w-[420px] h-[200px] md:h-[250px] relative rounded-3xl overflow-hidden snap-start shrink-0 group cursor-pointer">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
