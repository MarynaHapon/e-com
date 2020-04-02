// COre
import React from 'react';

// Components
import { CollectionItem } from '../../components';

// Other
import './index.styles.scss';

export const CollectionPreview = ({ title, items }) => {
  const itemsJSX = items
    .filter((item, index) => index < 4)
    .map(({ id, name, price, imageUrl }) => (
      <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
    ));

  return (
    <section className='collectionPreview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {itemsJSX}
      </div>
    </section>
  );
};
