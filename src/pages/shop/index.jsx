// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import { CollectionPage } from '../../pages';

// Components
import { CollectionOverview } from '../../components';

// Other
import './index.styles.scss';

export const ShopPage = ({ match: { path } }) => {
  return (
    <div className='shopPage'>
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
