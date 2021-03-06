export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //this if won't run if the item is not there, so quantity will exist for items that have it there
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if item doesn't already exist, we are adding it and giving it a quantity
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = ( cartItems, cartItemToRemove ) => {
  const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id );

  //if quantity is greater then 0 just reduce quantity
  if ( existingCartItem.quantity > 1 ) {
    return cartItems.map( cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem );
  };

  //if quantity is 1 || < 1
  return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id );
};