import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//output selector now memoized because createSelector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (cartTotal, itemValue) => cartTotal + itemValue.quantity,
      0
    )
);
