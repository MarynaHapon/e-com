// Core
import React from 'react';

// Hooks
import { useCollectionData } from '../../hook/useCollectionData';

// Components
import { CollectionItem, Headline } from '../../components'

// Other
import './index.styles.scss';

const CollectionPage = ({ match }) => {
  const { collection } = useCollectionData(match.params.collectionId);

  const itemsJSX = collection.items.map(({ id, name, price, imageUrl }) => (
    <CollectionItem key={id} id={id} name={name} price={price} imageUrl={imageUrl} />
  ));

  return (
    <section className='collectionPage'>
      <Headline>{collection.title}</Headline>
      <div className='items'>{itemsJSX}</div>
    </section>
  )
};

export default CollectionPage;
