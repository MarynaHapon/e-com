// Core
import React from 'react';

// Hooks
import { useCollectionData } from '../../hook/useCollectionData';

// Components
import { CollectionItem, Headline } from '../../components'

// Other
import './index.styles.scss';

export const CollectionPage = ({ match }) => {
  const { collection } = useCollectionData(match.params.collectionId);

  const itemsJSX = collection && collection.items && collection.items.map(({ id, name, price, imageUrl }) => (
    <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
  ));

  const titleJSX = collection && collection.title && (
    <Headline>{collection.title}</Headline>
  );

  return (
    <section className='collectionPage'>
      {titleJSX}
      <div className='items'>{itemsJSX}</div>
    </section>
  )
};

