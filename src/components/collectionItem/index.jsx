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
      <div className='body'>
        <div className='bodyImage' style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>

      <div className='footer'>
        <p className='footerName' title={name}>{name}</p>
        <p className='footerDescription'>{description}</p>
        <p className='footerPrice'>${price}</p>
        <ButtonIcon
          type='button'
          variant='primary'
          className='footerButton'
          onClick={onClickHandler}
          icon={<IconPlus />}
        />
      </div>
    </div>
  )
};
