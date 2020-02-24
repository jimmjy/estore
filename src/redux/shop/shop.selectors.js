import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = ( urlParams ) => createSelector(
  [selectShopCollection],
  // ( collections ) => collections.find( collection => collection.id === COLLECTION_ID_MAP[urlParams] )
  collections => collections[urlParams]
);


