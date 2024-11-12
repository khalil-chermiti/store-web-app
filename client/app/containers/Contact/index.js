import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

import actions from '../../actions';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div className='contact'>
        {/* Helmet for SEO */}
        <Helmet>
          <title>Contactez Maison des Algues</title>
          <meta
            name='description'
            content="Contactez Maison des Algues pour toute demande concernant nos produits bio, parapharmacie, et soins à base d'algues et d'huiles naturelles."
          />
        </Helmet>

        <h3 className='text-uppercase'>Informations de Contact</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['name']}
                label={'Nom'}
                name={'name'}
                placeholder={'Votre nom complet'}
                value={contactFormData.name}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'E-mail'}
                name={'email'}
                placeholder={'Votre adresse e-mail'}
                value={contactFormData.email}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'textarea'}
                error={formErrors['message']}
                label={'Message'}
                name={'message'}
                placeholder={'Veuillez décrire votre message'}
                value={contactFormData.message}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
          </Row>
          <hr />
          <div className='contact-actions'>
            <Button type='submit' text='Soumettre' />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors
  };
};

export default connect(mapStateToProps, actions)(Contact);
