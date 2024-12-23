/*
 *
 * OrderSuccess
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../../actions";

import NotFound from "../../components/Common/NotFound";
import LoadingIndicator from "../../components/Common/LoadingIndicator";

class OrderSuccess extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchOrder(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      this.props.fetchOrder(id);
    }
  }

  render() {
    const { order, isLoading } = this.props;

    return (
      <div className="order-success">
        {isLoading ? (
          <LoadingIndicator />
        ) : order._id ? (
          <div className="order-message">
            <h2>Merci pour votre commande .</h2>
            <p>
              Commande <span className="order-label">#{order._id}</span> est
              terminé.
            </p>
            <p>Un e-mail de confirmation vous sera envoyé .</p>
            <div className="order-success-actions">
              {/* <Link to='/dashboard/orders' className='btn-link'>
                Manage Orders
              </Link>
              <Link to='/shop' className='btn-link shopping-btn'>
                Continue Shopping
              </Link> */}
            </div>
          </div>
        ) : (
          <NotFound message="No order found." />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order.order,
    isLoading: state.order.isLoading,
  };
};

export default connect(mapStateToProps, actions)(OrderSuccess);
