import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  collections => (collections ? Object.values(collections) : [])
);

export const selectCollection = urlParams =>
  createSelector([selectShopCollection], collections =>
    collections ? collections[urlParams] : null
  );
