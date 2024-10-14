import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';

const AddCategoryItemForm = props => {
  const {
    categories,
    categoryItemFormData,
    categoryItemChange,
    addCategoryItem
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addCategoryItem();
  };

  return (
    <div className='add-category'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              label={'Name'}
              name={'name'}
              placeholder={'Category Menu Item Name'}
              value={categoryItemFormData.name}
              onInputChange={(name, value) => {
                categoryItemChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              label={'Select sub categories'}
              multi={true}
              value={categoryItemFormData.categories}
              options={categories}
              handleSelectChange={value => {
                categoryItemChange('categories', value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='my-2'>
            <Switch
              id={'active-category'}
              name={'isActive'}
              label={'Active?'}
              checked={categoryItemFormData.isActive}
              toggleCheckboxChange={value =>
                categoryItemChange('isActive', value)
              }
            />
          </Col>
        </Row>
        <hr />
        <div className='add-category-actions'>
          <Button type='submit' text='Add Category Item' />
        </div>
      </form>
    </div>
  );
};

export default AddCategoryItemForm;
