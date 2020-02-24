import React from 'react';
import { Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';

const ShopPage = (props) => (
    <div className='shop-page'>
        <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
        <Route path={`${props.match.path}/:collectionId`} component={CollectionPage} />
    </div>
);


export default ShopPage;