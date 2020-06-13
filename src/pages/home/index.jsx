// Core
import React from 'react';

// Components
import { Directory, Shape } from '../../components';

// Other
import './index.styles.scss';

export const HomePage = () => {
  return (
    <div className='homePage'>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Directory />
    </div>
  );
};
