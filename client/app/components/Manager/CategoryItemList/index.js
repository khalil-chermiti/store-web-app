import React from 'react';

import { Link } from 'react-router-dom';

const CategoryItemList = props => {
  const { categoriesMenuItems } = props;

  return (
    <div className='c-list'>
      {categoriesMenuItems?.map((category, index) => (
        <Link
          to={`/dashboard/menu/edit/${category._id}`}
          key={index}
          className='d-block mb-3 p-4 category-box'
        >
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{category.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryItemList;
