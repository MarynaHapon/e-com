// Core
import React from 'react';

// Components
import { CollectionOverview } from '../../components';

// Other
import './index.styles.scss';

export const ShopPage = () => {
  return (
    <div className='shopPage'>
      <h1 className='title'>Shop Page</h1>
      <CollectionOverview />
    </div>
  );
};
