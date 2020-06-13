// Core
import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import { ButtonIcon } from '../../components';

// Other
import './index.styles.scss';
import { addItemToCart } from '../../redux/cart';
import { ReactComponent as IconPlus } from '../../assets/images/plus.svg';

export const CollectionItem = (item) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(addItemToCart(item));

  const description = 'description';

  return (
    <div className='collectionItem'>
      <div className='collectionItemBody'>
        <div className='collectionItemImage' style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>

      <div className='collectionItemFooter'>
        <p className='collectionItemName' title={name}>{name}</p>
        <p className='collectionItemDescription'>{description}</p>
        <p className='collectionItemPrice'>${price}</p>
        <ButtonIcon
          type='button'
          variant='primary'
          className='collectionItemButton'
          onClick={onClickHandler}
          icon={<IconPlus />}
        />
      </div>
    </div>
  )
};
