// Core
import React from 'react';

// Hooks
import { useCollectionData } from '../../hook/useCollectionData';

// Components
import { CollectionItem } from '../../components/index'

// Other
import './index.styles.scss';

export const CollectionPage = ({ match }) => {
  const { collection } = useCollectionData(match.params.collectionId);

  console.log(collection);

  return (
    <section className='collectionPage'>
      <h2>COLLECTION PAGE</h2>
    </section>
  )
};

