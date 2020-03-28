// Core
import React from 'react';

// Hooks
import { useDirectoryMenu } from './hook/useDirectoryMenu';

// Components
import { MenuItem } from '../../components';

// Other
import './index.styles.scss';

export const Directory = () => {
  const { directoryMenu } = useDirectoryMenu();
  const directoryMenuJSX = directoryMenu.map(({ id, title, imageUrl, size }) => (
    <MenuItem
      size={size}
      key={id}
      title={title}
      subtitle='SHOP NOW'
      imageUrl={imageUrl}
    />
  ));

  return (
    <div className='directory'>
      {directoryMenuJSX}
    </div>
  );
};
