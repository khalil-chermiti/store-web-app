import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationItem = ({ slug, name, handleCategoryClick }) => {
  return (
    <li className='menu-item'>
      <NavLink
        onClick={handleCategoryClick}
        to={'/shop/category/' + slug}
        activeClassName='active-link'
        exact
      >
        {name}
      </NavLink>
    </li>
  );
};
