// Core
import React from 'react';

// Hooks
import { useShopData } from '../../hook/useShopData';

// Components
import { CollectionPreview } from '../../components';

// Other
import './index.styles.scss';

export const ShopPage = () => {
  const { shopData } = useShopData();

  const collectionsJSX = shopData
    .map(({ id, title, items }) => (
      <CollectionPreview
        key={id}
        title={title}
        items={items}
      />
    ));

  return (
    <div className='shopPage'>
      <h1 className='title'>Shop Page</h1>
      {collectionsJSX}
    </div>
  );
};
