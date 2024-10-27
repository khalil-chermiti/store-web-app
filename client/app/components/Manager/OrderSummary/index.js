/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';

const OrderSummary = props => {
  const { order } = props;

  return (
    <Col className='order-summary pt-3'>
      <h2>Résumé de la commande</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Sous-total</p>
        <p className='summary-value ml-auto'>{order.total} DT</p>
      </div>

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Expédition & Manutention</p>
        <p className='summary-value ml-auto'>{order.shippingFee} DT</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Total</p>
        <p className='summary-value ml-auto'>
          {order.shippingFee + order.total} DT
        </p>
      </div>
    </Col>
  );
};

export default OrderSummary;
