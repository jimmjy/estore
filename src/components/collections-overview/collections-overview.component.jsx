import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../preview-collection/preview-collections.component";

import "./collections-overview.styles.scss";

function findN( collection ) {
  console.log('keys', Object.keys(collection))
  for ( let n in collection ) {
    console.log(collection[n])
  }
}

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {console.log('collections', collections)}
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
    {findN(collections)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection
});

export default connect(mapStateToProps)(CollectionsOverview);
