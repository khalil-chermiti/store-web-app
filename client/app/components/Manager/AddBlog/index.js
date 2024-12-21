/**
 *
 * AddBlog
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddBlog = props => {
  const { blogFormData, blogChange, addBlog, image } = props;

  const [selectedImage, setSelectedImage] = React.useState(null);
  console.log('blogFormData', blogFormData);

  const handleSubmit = event => {
    event.preventDefault();
    addBlog();
  };

  return (
    <div className='add-blog'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              label={'Titre'}
              name={'title'}
              placeholder={'Titre du blog'}
              value={blogFormData.title}
              onInputChange={(name, value) => {
                blogChange(name, value);
              }}
            />
            <Input
              type={'file'}
              name={'image'}
              label={'Fichier'}
              placeholder={'Veuillez télécharger une image'}
              value={image}
              onInputChange={(name, value) => {
                setSelectedImage(URL.createObjectURL(value));
                blogChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'ReactQuill'}
              label={'content'}
              name={'content'}
              placeholder={'contenu du blog'}
              value={blogFormData.content}
              onInputChange={(name, value) => {
                blogChange(name, value);
              }}
            />
          </Col>
        </Row>
        <div className='add-blog-actions mt-3'>
          <Button type='submit' text='Publier' />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
