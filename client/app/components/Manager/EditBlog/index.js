import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions';

import { Col, Row } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

class EditBlog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null
    };
  }

  handleImageChange = (name, value) => {
    const imageUrl = URL.createObjectURL(value); // Preview the selected image
    this.setState({ selectedImage: imageUrl });
    this.props.blogEditChange(name, value); // Update the blog image in the form data
  };

  handleSubmit = e => {
    e.preventDefault();
    const { blog, updateBlog } = this.props;
    updateBlog(blog);
  };

  render() {
    const { blog, blogEditChange, deleteBlog } = this.props;
    const { selectedImage } = this.state;

    return (
      <div className='add-blog'>
        <form onSubmit={this.handleSubmit} noValidate>
          <Row>
            <Col xs='12' lg='6'>
              <Input
                type={'text'}
                label={'Titre'}
                name={'title'}
                placeholder={'Titre du blog'}
                value={blog.title}
                onInputChange={(name, value) => {
                  blogEditChange(name, value);
                }}
              />
              <Input
                type={'file'}
                name={'image'}
                label={'Fichier'}
                placeholder={'Veuillez télécharger une image'}
                onInputChange={(name, value) => {
                  this.handleImageChange(name, value);
                }}
              />
              {selectedImage && (
                <div className='mt-3'>
                  <p>Image sélectionnée :</p>
                  <img
                    src={selectedImage}
                    alt='Prévisualisation'
                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                  />
                </div>
              )}
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'ReactQuill'}
                label={'Contenu'}
                name={'content'}
                placeholder={'Contenu du blog'}
                value={blog.content}
                onInputChange={(name, value) => {
                  blogEditChange(name, value);
                }}
              />
            </Col>
          </Row>
          <div className='add-blog-actions mt-3'>
            <Button type='submit' text='Enregistrer' className='mr-1' />
            <Button
              variant='danger'
              text='Supprimer'
              onClick={() => {
                if (window.confirm('Voulez-vous vraiment supprimer ce blog?')) {
                  deleteBlog(blog._id);
                }
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    blog: state.blog.blog
  };
};

export default connect(mapStateToProps, actions)(EditBlog);
