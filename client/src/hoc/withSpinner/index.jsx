// Core
import React from 'react';

// Other
import { SpinnerContainer, SpinnerOverlay } from './index.styles';

export const WithSpinner = (Component) => {
  return ({ isLoading, ...props }) => isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
    ) : (
    <Component {...props} />
  )
};
