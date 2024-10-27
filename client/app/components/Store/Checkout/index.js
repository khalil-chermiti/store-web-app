/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = props => {
  const {
    authenticated,
    handleShopping,
    handleCheckout,
    placeOrder,
    toggleCart,
    initPlaceOrder
  } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='continuer shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='Passer la commande'
            onClick={() => initPlaceOrder()}
          />
        ) : (
          // <Button
          //   variant='primary'
          //   text='Proceed To Checkout'
          //   onClick={() => handleCheckout()}
          // />
          <Button
            variant='primary'
            text='Passer la commande'
            onClick={() => initPlaceOrder()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
