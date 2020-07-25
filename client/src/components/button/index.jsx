// Core
import React from 'react';

// Other
// import './index.styles.scss';
import { ButtonContainer } from './index.styles';

export const Button = (props) => {
  const { type, variant, onClick, children } = props;

  return (
    <ButtonContainer type={type} onClick={onClick} variant={variant}>
      {children}
    </ButtonContainer>
  )
};
