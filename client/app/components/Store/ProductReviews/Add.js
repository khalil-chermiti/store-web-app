/**
 *
 * Add
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import SelectOption from '../../Common/SelectOption';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const recommedableSelect = [
  { value: 1, label: 'Oui' },
  { value: 0, label: 'Non' }
];

const Add = props => {
  const { reviewFormData, reviewChange, reviewFormErrors, addReview } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addReview();
  };

  return (
    <div className='bg-white p-4 box-shadow-primary add-review'>
      <form onSubmit={handleSubmit} noValidate>
        <h3 className='mb-3'>Ajoutez votre Avis</h3>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={reviewFormErrors['title']}
              label={'Titre'}
              name={'title'}
              placeholder={'Entrez le titre de l’avis'}
              value={reviewFormData.title}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={reviewFormErrors['review']}
              label={'Commentaire'}
              name={'review'}
              placeholder={'Écrivez un avis'}
              value={reviewFormData.review}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'stars'}
              error={reviewFormErrors['rating']}
              label={'Évaluation'}
              name={'rating'}
              value={reviewFormData.rating}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={reviewFormErrors['isRecommended']}
              label={'Recommanderez-vous ce produit ?'}
              name={'isRecommended'}
              value={reviewFormData.isRecommended}
              options={recommedableSelect}
              handleSelectChange={value => {
                reviewChange('isRecommended', value);
              }}
            />
          </Col>
        </Row>
        <div className='mt-4'>
          <Button type='submit' text='Publier l’Avis' />
        </div>
      </form>
    </div>
  );
};

export default Add;
