// Core
import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import { Button } from '../../components';

// Other
import './index.styles.scss';
import { addItemToCart } from '../../redux/cart';

export const CollectionItem = (item) => {
  console.log(item);

  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(addItemToCart(item));

  return (
    <div className='collectionItem'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <div className='overlay'>
        <Button variant='tertiary' onClick={onClickHandler}>Add to Cart</Button>
      </div>
    </div>
  )
};
