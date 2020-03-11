import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shop.styles.scss';

const CollectionsOverWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            loading: true
        }
    };

    unsubscribeFromSnapShot = null;

    componentDidMount() {
        const { updateCollections } = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState((prevState) => ({ loading: false }))
        })
    };

    render() {
        const { match: { path } } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${path}`} render={(props) => <CollectionsOverWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);