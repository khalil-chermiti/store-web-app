import React, { useState } from 'react';
import { NavigationItem } from './NavigationItem';

export const NavigationGroup = ({ group, handleCategoryClick }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div onClick={() => setToggle(!toggle)}>
      <p
        className='menu-item-title'
        style={{
          borderLeft: toggle ? '3px solid green' : '3px solid white',
          userSelect: 'none',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between'
        }}
      >
        {group.name}

        {toggle ? (
          <span className='fa fa-chevron-up dropdown-caret'></span>
        ) : (
          <span className='fa fa-chevron-down dropdown-caret'></span>
        )}
      </p>
      <div
        style={{
          display: toggle ? 'block' : 'none'
        }}
      >
        {group.categories?.map((sub, index) => (
          <NavigationItem
            key={index}
            slug={sub.slug}
            name={sub.name}
            handleCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
    </div>
  );
};
