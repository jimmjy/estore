import React from 'react';

import './preview-collections.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

//only is responsible for showing 4. Just literally a how many to display control comp
const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map((item) => (
                <CollectionItem key={item.id} item={item} />))}
        </div>
    </div >
);

export default CollectionPreview;