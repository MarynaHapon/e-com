// Core
import React from 'react';
import { Route } from 'react-router-dom';

// Pages
import { CollectionPage } from '../../pages';

// Components
import { CollectionOverview, Shape } from '../../components';

// Other
import './index.styles.scss';

export const ShopPage = ({ match: { path } }) => {
  return (
    <div className='shopPage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Route exact path={path} component={CollectionOverview} />
      <Route path={`${path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
