import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import BulkOrder from './pages/BulkOrder';
import LiveTracking from './pages/LiveTracking';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="restaurant/:id" element={<RestaurantDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bulk-order" element={<BulkOrder />} />
          <Route path="tracking" element={<LiveTracking />} />
          <Route path="profile" element={<Profile />} />
          {/* Add more routes here as we build them */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
