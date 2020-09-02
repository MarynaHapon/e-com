// Core
import React from 'react';
import { shallow } from 'enzyme';

// Component
import { ButtonIcon } from './index';

it('expect to render ButtonIcon component', () => {
  expect(shallow(
    <ButtonIcon
      type='button'
      variant='primary'
      className='collectionItemButton'
      onClick={() => {}}
      icon={<svg />}
    />
  )).toMatchSnapshot();
});
