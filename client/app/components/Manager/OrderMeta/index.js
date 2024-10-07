/**
 *
 * OrderMeta
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import { CART_ITEM_STATUS } from '../../../constants';
import { formatDate } from '../../../utils/date';
import Button from '../../Common/Button';
import { ArrowBackIcon } from '../../Common/Icon';

const OrderMeta = props => {
  const { order, cancelOrder, onBack } = props;

  const renderMetaAction = () => {
    const isNotDelivered =
      order.products.filter(i => i.status === CART_ITEM_STATUS.Delivered)
        .length < 1;

    if (isNotDelivered) {
      return <Button size='sm' text='Cancel Order' onClick={cancelOrder} />;
    }
  };

  return (
    <div className='order-meta'>
      <div className='d-flex align-items-center justify-content-between mb-3 title'>
        <h2 className='mb-0'>Détails de la commande</h2>
        <Button
          variant='link'
          icon={<ArrowBackIcon />}
          size='sm'
          text='Retour aux commandes'
          onClick={onBack}
        ></Button>
      </div>

      <Row>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>ID de commande</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order._id}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Date de commande</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${formatDate(
                order.created
              )}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='4' className='text-left text-md-right'>
          {renderMetaAction()}
        </Col>
      </Row>

      <div className='d-flex align-items-center justify-content-between mb-3 mt-3 title'>
        <h2 className='mb-0'>Détails du client</h2>
      </div>

      <Row>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Nom complet</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.fullName}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Email</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.email}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Numéro de téléphone</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.phoneNumber}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Adresse</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.address}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Ville</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.city}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Code postal</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.zipCode}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs='12' md='8'>
          <Row>
            <Col xs='4'>
              <p className='one-line-ellipsis'>Mode de paiement</p>
            </Col>
            <Col xs='8'>
              <span className='order-label one-line-ellipsis'>{` ${order.paymentMethod}`}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OrderMeta;
