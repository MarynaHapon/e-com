// Core
import React from 'react';

// Components
import { Spinner } from '../../components';

export const WithSpinner = (Component) => ({ isLoading, ...props }) =>
  isLoading ? <Spinner /> : <Component {...props} />;
