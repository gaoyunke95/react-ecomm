import {createContext, useEffect, useState} from 'react';


export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
  }

  return [...cartItems, {...productToAdd, quantity: 1 }];
}

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

  console.log(productToRemove);
  if (existingCartItem) {
    return cartItems
        .map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        .filter((cartItem) => cartItem.quantity >= 1);
  }

  return [...cartItems];
}

export const removeCartItemAll = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
  if (existingCartItem) {
    return cartItems
        .map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: 0 } : cartItem)
        .filter((cartItem) => cartItem.quantity >= 1);
  }
  return [...cartItems];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: 0,
  removeItemFromCart: () => {},
  removeAllSingleCartItem: () => {},
});


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartTotal = () => {
    const curCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(curCartTotal);
  }

  useEffect(getCartTotal, [cartItems]);
  const addItemToCart = (product) => {
    console.log(product);
    setCartItems(addCartItem(cartItems, product));
  }

  const removeItemFromCart = (product) => setCartItems(removeCartItem(cartItems, product));

  const removeAllSingleCartItem = (product) => setCartItems(removeCartItemAll(cartItems, product));

  const contextValue = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartTotal, removeItemFromCart, removeAllSingleCartItem};
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
