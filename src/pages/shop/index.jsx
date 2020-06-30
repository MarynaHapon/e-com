// Core
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

// Pages
import { CollectionPage } from '../../pages/collection';

// Components
import { WithSpinner } from '../../hoc/withSpinner';
import { CollectionOverview, Shape } from '../../components';

// Other
import './index.styles.scss';
import { fetchCollectionsStartAsync, shopSelector } from '../../redux/shop';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

export const ShopPage = ({ match: { path } }) => {
  const dispatch = useDispatch();
  const { isFetching, collections } = useSelector(shopSelector);
  const isLoaded = !!collections;

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return (
    <div className='shopPage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Route exact path={path} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
      <Route path={`${path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />} />
    </div>
  );
};
