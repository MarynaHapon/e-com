// Core
import React from 'react';
import { shallow } from 'enzyme';

// Component
import { Button } from './index';

it('expect to render Button component', () => {
  expect(shallow(
    <Button variant='primary' onClick={() => {}}>
      Go to checkout
    </Button>
  )).toMatchSnapshot();
});
