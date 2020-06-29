// Core
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

// Pages
import { CollectionPage } from '../../pages/collection';

// Components
import { WithSpinner } from '../../hoc/withSpinner';
import { CollectionOverview, Shape } from '../../components';

// Other
import './index.styles.scss';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/utils';
import { updateCollections } from '../../redux/shop';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

export const ShopPage = ({ match: { path } }) => {
  const dispatch = useDispatch();
  const [ unsubscribeFromSnapshot, setUnsubscribeFromSnapshot ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = await convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionMap));
      setIsLoading(false);
    });

    // setUnsubscribeFromSnapshot(unsubscribeFromSnapshot);
    return () => setIsLoading(false);
  }, []);

  return (
    <div className='shopPage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Route exact path={path} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
      <Route path={`${path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
    </div>
  );
};
