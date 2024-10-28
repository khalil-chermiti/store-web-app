import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';
import Switch from '../../Common/Switch';

const EditCategory = props => {
  const {
    categoriesSelect,
    categoryItem,
    categoryEditItemChange,
    updateCategoryMenu,
    deleteCategoryItem
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateCategoryMenu();
  };

  return (
    <div className='edit-category'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Category link </label>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              label={'Name'}
              name={'name'}
              placeholder={'Category Name'}
              value={categoryItem.name}
              onInputChange={(name, value) => {
                categoryEditItemChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              label={'Select categorie'}
              multi={true}
              defaultValue={categoryItem.categories}
              options={categoriesSelect}
              handleSelectChange={value => {
                categoryEditItemChange('categories', value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              style={{ width: 100 }}
              tooltip={categoryItem.isActive}
              tooltipContent={`Disabling ${categoryItem.name} will also disable all ${categoryItem.name} products.`}
              id={`enable-category-${categoryItem._id}`}
              name={'isActive'}
              label={'Active?'}
              checked={categoryItem.isActive}
              toggleCheckboxChange={value =>
                categoryEditItemChange('isActive', value)
              }
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Save'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Delete'
            onClick={() => deleteCategoryItem(categoryItem._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
