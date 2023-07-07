import { createStore } from 'redux';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  cartItemCount: parseInt(localStorage.getItem('cartItemCount')) || null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCartItems = [...state.cartItems, action.payload];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      localStorage.setItem('cartItemCount', updatedCartItems.length.toString());
      return {
        ...state,
        cartItems: updatedCartItems,
        cartItemCount: updatedCartItems.length,
      };
    case 'REMOVE_FROM_CART':
      if (action.payload) {
        const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload);
        localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
        localStorage.setItem('cartItemCount', filteredCartItems.length.toString());
        return {
          ...state,
          cartItems: filteredCartItems,
          cartItemCount: filteredCartItems.length,
        };
      } else {
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemCount');
        return {
          ...state,
          cartItems: [],
          cartItemCount: 0,
        };
      }
    default:
      return state;
  }
};

const store = createStore(cartReducer);

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});

export default store;
