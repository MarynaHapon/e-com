// Core
import React from 'react';

// Hooks
import { useDirectoryData } from '../../hook/useDirectoryData';

// Components
import { MenuItem } from '../../components';

// Other
import './index.styles.scss';

export const Directory = () => {
  const { directoryData } = useDirectoryData();
  const directoryMenuJSX = directoryData.map(({ id, title, imageUrl, size, linkUrl }) => (
    <MenuItem
      size={size}
      key={id}
      title={title}
      subtitle='SHOP NOW'
      imageUrl={imageUrl}
      linkUrl={linkUrl}
    />
  ));

  return (
    <div className='directory'>
      {directoryMenuJSX}
    </div>
  );
};
