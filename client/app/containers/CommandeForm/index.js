/*
 *
 * place command
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class CommandeForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      phoneNumber: '',
      zipCode: '',
      fullName: '',
      email: '',
      paymentMethod: 'paiementEnLigne'
    };
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      address,
      city,
      phoneNumber,
      zipCode,
      fullName,
      email,
      paymentMethod
    } = this.state;

    // Prepare customer info to send to placeOrder
    const customerInfo = {
      address,
      city,
      phoneNumber,
      zipCode,
      fullName,
      email,
      paymentMethod
    };

    this.props.placeOrder(customerInfo);
  };

  render() {
    const { formErrors } = this.props;
    const { customerInfo } = this.state;

    return (
      <div className='forgot-password-form'>
        <h3>Confirmer la commande</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['text']}
                label={'Nom-Prénom *'}
                name={'fullName'}
                placeholder={'Entrez votre Nom-Prénom'}
                value={customerInfo?.fullName}
                onInputChange={this.handleInputChange}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['city']}
                label={'Ville'}
                name={'city'}
                placeholder={'Entrez votre ville'}
                value={customerInfo?.city}
                onInputChange={this.handleInputChange}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['text']}
                label={'Adresse complète *'}
                name={'address'}
                placeholder={'Entrez votre adresse complète'}
                value={customerInfo?.address}
                onInputChange={this.handleInputChange}
              />
            </Col>

            <Col xs='12' md='6'>
              <Input
                type={'number'}
                error={formErrors['text']}
                label={'Téléphone *'}
                name={'phoneNumber'}
                placeholder={'Entrez votre numéro de téléphone'}
                value={customerInfo?.phoneNumber}
                onInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'number'}
                error={formErrors['number']}
                label={'Code postal *'}
                name={'zipCode'}
                placeholder={'Entrez votre code postal'}
                value={customerInfo?.zipCode}
                onInputChange={this.handleInputChange}
              />
            </Col>

            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'Adresse e-mail'}
                name={'email'}
                placeholder={'Entrez votre adresse e-mail'}
                value={customerInfo?.email}
                onInputChange={this.handleInputChange}
              />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col xs='12' md='6'>
              <Input
                type={'radio'}
                error={formErrors['radio']}
                label={'Paiement en ligne '}
                name={'paymentMethod'}
                value={'paiementEnLigne'}
                checked={customerInfo?.paymentMethod === 'paiementEnLigne'}
                onInputChange={this.handleInputChange}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'radio'}
                error={formErrors['email']}
                label={'Paiement à la livraison '}
                name={'paymentMethod'}
                placeholder={'Entrez un mode de paiement'}
                onInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
          <hr />
          <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
            <Button
              type='submit'
              variant='primary'
              text='Confirmer'
              className='mb-3 mb-md-0'
            />
            <Link className='redirect-link' to={'/shop'}>
              Continuer Shopping
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formErrors: state.forgotPassword.formErrors
  };
};

export default connect(mapStateToProps, actions)(CommandeForm);
