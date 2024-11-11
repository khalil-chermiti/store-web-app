/**
 *
 * ProductsShop
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/Store/ProductList';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import { Helmet } from 'react-helmet';

class ProductsShop extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.filterProducts(slug);
  }

  render() {
    const { products, isLoading, authenticated, updateWishlist } = this.props;

    const displayProducts = products && products.length > 0;

    return (
      <div className='products-shop'>
        <Helmet>
          <title>Maison des Algues - Boutique Bio et Parapharmacie</title>
          <meta
            name='description'
            content={
              'Explorez notre gamme de produits bio et de parapharmacie enrichis en algues et huiles naturelles.'
            }
          />
          <meta
            name='keywords'
            content={
              "produits bio, parapharmacie, huiles naturelles, produits à base d'algues"
            }
          />
        </Helmet>

        {isLoading && <LoadingIndicator />}
        {displayProducts && (
          <ProductList
            products={products}
            authenticated={authenticated}
            updateWishlist={updateWishlist}
          />
        )}
        {!isLoading && !displayProducts && (
          <NotFound message='No products found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(ProductsShop);
