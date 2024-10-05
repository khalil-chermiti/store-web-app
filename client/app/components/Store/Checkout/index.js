/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';
import { useHistory } from "react-router-dom";

const Checkout = props => {
  const { authenticated, handleShopping, handleCheckout, placeOrder, toggleCart } = props;
  const history = useHistory()

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continue shopping'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='Passer la commande'
            onClick={() =>
              // placeOrder()
              history.push("/order/command")

            }
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
            onClick={() =>
              // placeOrder()
              history.push("/order/command")
            }
          />
        )}
      </div>
    </div>
  )


};

export default Checkout;
