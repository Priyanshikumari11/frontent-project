import { describe, it, expect } from 'vitest';
import cartReducer, { addToCart, removeFromCart, clearCart } from './cartSlice';

describe('cartSlice reducer', () => {
  const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  };

  const mockItem = {
    menuId: 'm1',
    name: 'Whopper',
    price: 150,
    restaurantId: 'r1',
    image: 'img.jpg',
    veg: false,
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addToCart', () => {
    const actual = cartReducer(initialState, addToCart(mockItem));
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0].menuId).toEqual('m1');
    expect(actual.items[0].quantity).toEqual(1);
    expect(actual.totalQuantity).toEqual(1);
    expect(actual.totalAmount).toEqual(150);
  });

  it('should increment quantity when same item is added again', () => {
    const stateWithItem = cartReducer(initialState, addToCart(mockItem));
    const actual = cartReducer(stateWithItem, addToCart(mockItem));
    
    expect(actual.items.length).toEqual(1);
    expect(actual.items[0].quantity).toEqual(2);
    expect(actual.totalQuantity).toEqual(2);
    expect(actual.totalAmount).toEqual(300);
  });

  it('should handle removeFromCart', () => {
    const stateWithItem = cartReducer(initialState, addToCart(mockItem));
    const actual = cartReducer(stateWithItem, removeFromCart('m1'));
    
    expect(actual.items.length).toEqual(0);
    expect(actual.totalQuantity).toEqual(0);
    expect(actual.totalAmount).toEqual(0);
  });

  it('should handle clearCart', () => {
    const stateWithItem = cartReducer(initialState, addToCart(mockItem));
    const actual = cartReducer(stateWithItem, clearCart());
    
    expect(actual.items.length).toEqual(0);
    expect(actual.totalQuantity).toEqual(0);
    expect(actual.totalAmount).toEqual(0);
  });
});
