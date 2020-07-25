// Core
import React from 'react';

// Other
import './index.styles.scss';

export const Shape = (props) => {
  const {
    type,
    width,
    height,
    top = 'auto',
    left = 'auto',
    bottom = 'auto',
    right = 'auto',
  } = props;
  const shapeCX = `shape ${type}`;

  return (
    <span
      className={shapeCX}
      style={{
        top: top ? `${top}vh` : top,
        left: left ? `${left}vw` : left,
        bottom: bottom ? `${bottom}vh` : bottom,
        right: right ? `${right}vw` : right,
        width: `${width}vw`,
        height: `${height}vh`,
      }}
    />
  )
};

