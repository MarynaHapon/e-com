// Core
import React from 'react';

// Hooks
import { useCollectionData } from '../../hook/useCollectionData';

// Components
import { CollectionItem, Headline } from '../../components/index'

// Other
import './index.styles.scss';

export const CollectionPage = ({ match }) => {
  const { collection } = useCollectionData(match.params.collectionId);
  const { title, items } = collection;

  const itemsJSX = items.map(({ id, name, price, imageUrl }) => (
    <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
  ));

  return (
    <section className='collectionPage'>
      <Headline>{title}</Headline>
      <div className='items'>{itemsJSX}</div>
    </section>
  )
};

