// Core
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

// Hooks
import { useCollectionFetch } from '../../hook/useCollectionsFetch';

// Components
import { WithSpinner } from '../../hoc/withSpinner';
import { CollectionOverview, Shape } from '../../components';

// Other
import './index.styles.scss';

const CollectionPage = lazy(() => import('../../pages/collection'));
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = ({ match: { path } }) => {
  const { isFetching, isLoaded } = useCollectionFetch();

  return (
    <div className='shopPage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Route exact path={path} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />} />
      <Route path={`${path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />} />
    </div>
  );
};

export default ShopPage;