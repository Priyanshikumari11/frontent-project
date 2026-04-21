import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

describe('RestaurantCard Component', () => {
  const mockRestaurant = {
    id: 'r1',
    name: 'Test Restaurant',
    image: 'test.jpg',
    promoted: true,
    rating: 4.5,
    deliveryTime: '30-40',
    cuisines: ['Indian', 'Chinese'],
    location: 'Test City',
    distance: '2.5 km',
  };

  it('renders restaurant details correctly', () => {
    render(
      <BrowserRouter>
        <RestaurantCard restaurant={mockRestaurant} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('PROMOTED')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText(/30-40 mins/i)).toBeInTheDocument();
    expect(screen.getByText('Indian, Chinese')).toBeInTheDocument();
    expect(screen.getByText(/Test City • 2.5 km/i)).toBeInTheDocument();
  });

  it('does not show PROMOTED badge if not promoted', () => {
    const unpromotedRestaurant = { ...mockRestaurant, promoted: false };
    render(
      <BrowserRouter>
        <RestaurantCard restaurant={unpromotedRestaurant} />
      </BrowserRouter>
    );

    expect(screen.queryByText('PROMOTED')).not.toBeInTheDocument();
  });
});
