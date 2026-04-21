import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const deliveryIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1986/1986937.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const restaurantIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448650.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const homeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const LiveTracking = () => {
  const [position, setPosition] = useState([28.6139, 77.2090]); // Starting point (Restaurant)
  const destination = [28.6250, 77.2150]; // User location
  const [eta, setEta] = useState(15);
  const [status, setStatus] = useState('On the way');

  // Simulate movement
  useEffect(() => {
    let currentLat = 28.6139;
    let currentLng = 77.2090;
    
    const interval = setInterval(() => {
      if (currentLat < destination[0]) currentLat += 0.0005;
      if (currentLng < destination[1]) currentLng += 0.0003;
      
      setPosition([currentLat, currentLng]);

      // Calculate distance to update ETA (Mock logic)
      const dist = Math.sqrt(Math.pow(destination[0] - currentLat, 2) + Math.pow(destination[1] - currentLng, 2));
      if (dist < 0.001) {
        setStatus('Arriving now');
        setEta(1);
      } else if (dist < 0.005) {
        setStatus('Almost there');
        setEta(5);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] overflow-hidden">
      {/* Map Section */}
      <div className="h-[50vh] lg:h-full lg:flex-1 relative z-0">
        <MapContainer center={[28.6190, 77.2120]} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.2090]} icon={restaurantIcon}>
            <Popup>Restaurant</Popup>
          </Marker>
          <Marker position={destination} icon={homeIcon}>
            <Popup>Home</Popup>
          </Marker>
          <Marker position={position} icon={deliveryIcon}>
            <Popup>Delivery Partner</Popup>
          </Marker>
          {/* Route path */}
          <Polyline 
            positions={[[28.6139, 77.2090], [28.6180, 77.2100], [28.6200, 77.2120], destination]} 
            color="#fc8019" 
            weight={4}
            dashArray="10, 10"
          />
        </MapContainer>
      </div>

      {/* Details Section */}
      <div className="bg-white dark:bg-gray-900 w-full lg:w-[400px] shadow-lg flex flex-col z-10 border-l border-gray-200 dark:border-gray-800">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-swiggy-black dark:text-white">{eta} mins</h2>
              <p className="text-swiggy-orange font-bold text-sm tracking-wide">{status}</p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-swiggy-orange flex items-center justify-center relative bg-white">
              <Clock className="text-swiggy-orange w-8 h-8" />
            </div>
          </div>
          
          <div className="flex items-start gap-4 mt-6 relative before:absolute before:left-[11px] before:top-6 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 z-10 shrink-0 mt-1"></div>
            <div>
              <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200">Order confirmed</h4>
              <p className="text-xs text-gray-500">1:15 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-6 relative before:absolute before:left-[11px] before:top-6 before:bottom-0 before:w-0.5 before:bg-swiggy-orange">
            <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 z-10 shrink-0 mt-1"></div>
            <div>
              <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200">Food prepared</h4>
              <p className="text-xs text-gray-500">1:30 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-6 relative">
            <div className="w-6 h-6 rounded-full bg-swiggy-orange border-4 border-white dark:border-gray-900 shadow-sm z-10 shrink-0 mt-1 animate-pulse"></div>
            <div>
              <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200">Delivery partner on the way</h4>
              <p className="text-xs text-gray-500">1:35 PM</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-between border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="Driver" />
              </div>
              <div>
                <h3 className="font-bold text-swiggy-black dark:text-white">Rahul Kumar</h3>
                <p className="text-xs text-gray-500">Delivery Partner</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors">
                <Phone className="w-5 h-5 fill-current" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <MessageSquare className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
