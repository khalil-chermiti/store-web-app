/*
 *
 * ForgotPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import { placeOrder } from '../Order/actions';

class CommandeForm extends React.PureComponent {



    constructor(props) {
        super(props);
        this.state = {
            nomPrenom: '',
            addresse: '',
            telephone: '',
            codePostal: '',
            email: '',
            typeLiv: '' // Will store either 'online' or 'delivery'
        };
    }

    componentDidMount() {
        const { toggleCart } = this.props;
        if (toggleCart) {
            toggleCart();
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { nomPrenom, addresse, telephone, codePostal, email, typeLiv } = this.state;

        // Prepare customer info to send to placeOrder
        const customerInfo = {
            nomPrenom,
            addresse,
            telephone,
            codePostal,
            email,
            typeLiv
        };

        this.props.placeOrder(customerInfo);
    };

    render() {
        const { formErrors } = this.props;
        const { customerInfo } = this.state;

        return (
            <div className='forgot-password-form'>
                <h3>Confirmer la commande </h3>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs='12' md='6'>
                            <Input
                                type={'text'}
                                error={formErrors['text']}
                                label={'Nom-Prenom *'}
                                name={'nomPrenom'}
                                placeholder={'Entrer votre Nom-Prenom'}
                                value={customerInfo?.nomPrenom}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>

                        <Col xs='12' md='6'>
                            <Input
                                type={'text'}
                                error={formErrors['text']}
                                label={'Addresse Complete *'}
                                name={'addresse'}
                                placeholder={'Please Enter Your Addresse'}
                                value={customerInfo?.address}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' md='6'>
                            <Input
                                type={'number'}
                                error={formErrors['text']}
                                label={'Télephone *'}
                                name={'telephone'}
                                placeholder={'Please Enter Your Phone number'}
                                value={customerInfo?.telephone}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>

                        <Col xs='12' md='6'>
                            <Input
                                type={'number'}
                                error={formErrors['number']}
                                label={'Code postal *'}
                                name={'codePostal'}
                                placeholder={'Please Enter Your code postal'}
                                value={customerInfo?.codePostal}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>

                        <Col xs='12' md='6'>
                            <Input
                                type={'text'}
                                error={formErrors['email']}
                                label={'Email Address'}
                                name={'email'}
                                placeholder={'Please Enter Your Email'}
                                value={customerInfo?.email}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs='12' md='6'>
                            <Input
                                type={'radio'}
                                error={formErrors['radio']}
                                label={'Paiement en ligne '}
                                name={'typeLiv'}
                                value={'paiementEnLigne'}
                                checked={customerInfo?.typeLiv === 'paiementEnLigne'}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>
                        <Col xs='12' md='6'>
                            <Input
                                type={'radio'}
                                error={formErrors['email']}
                                label={'Paiement a la livraison '}
                                name={'typeLiv'}
                                placeholder={'Please Enter a paiement method'}
                                onInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                    <hr />
                    <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
                        <Button
                            type='submit'
                            variant='primary'
                            text='Confirmer '
                            className='mb-3 mb-md-0'
                        />
                        <Link className='redirect-link' to={'/shop'}>
                            Continue Shopping
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authentication.authenticated,
        forgotFormData: state.forgotPassword.forgotFormData,
        formErrors: state.forgotPassword.formErrors
    };
};

export default connect(mapStateToProps, actions)(CommandeForm);
