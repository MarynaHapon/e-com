// Core
import React from 'react';

// Components
import { Directory, Shape } from '../../components';

// Other
import './index.styles.scss';
import { Container } from './index.styles';

const HomePage = () => {
  throw Error;
  return (
    <Container>
      <Shape type='primary' width={65} height={100} top={-5} left={-10} />
      <Shape type='secondary' width={60} height={80} bottom={20} right={-20} />
      <Directory />
    </Container>
  );
};

export default HomePage;
