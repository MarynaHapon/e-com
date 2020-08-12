// Core
import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

// Hooks
import { useCollectionFetch } from '../../hook/useCollectionsFetch';

// Components
import { Shape, Spinner } from '../../components';

// Other
import './index.styles.scss';

const CollectionPage = lazy(() => import('../../pages/collection/'));
const CollectionOverview = lazy(() => import('../../components/collectionOverview/index'));

const ShopPage = ({ match: { path } }) => {
  useCollectionFetch();

  return (
    <div className='shopPage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Suspense fallback={<Spinner />}>
        <Route exact path={path} render={(props) => <CollectionOverview {...props} />} />
        <Route path={`${path}/:collectionId`} render={(props) => <CollectionPage {...props} />} />
      </Suspense>
    </div>
  );
};

export default ShopPage;
