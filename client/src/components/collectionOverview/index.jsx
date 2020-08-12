// COre
import React from 'react';

// Hooks
import { useShopData } from '../../hook/useShopData';

// Components
import { CollectionPreview } from '../../components';

// Other
import './index.styles.scss';

const CollectionOverview = () => {
  const { shopData } = useShopData();

  const collectionsJSX = shopData
    .map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ));

  return (
    <section className='collectionOverview'>
      {collectionsJSX}
    </section>
  );
};

export default CollectionOverview;
