/**
 *
 * ProductList
 *
 */

import React from "react";

import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="p-list">
      {products.map((product, index) => (
        <Link
          to={`/dashboard/product/edit/${product._id}`}
          key={index}
          className="d-flex flex-row align-items-center mx-0 mb-3 product-box"
        >
          <img
            className="item-image"
            src={`${
              product && product.imageUrl
                ? product.imageUrl
                : "/images/placeholder-image.png"
            }`}
          />
          <div className="d-flex flex-column justify-content-between px-3 text-truncate w-100">
            <div className="d-flex flex-row justify-content-between">
              <h4 className="text-truncate">{product.name}</h4>
              {product.isActive ? (
                <span
                  className="badge badge-success"
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "white",
                    height: "fit-content",
                  }}
                >
                  actif
                </span>
              ) : (
                <span
                  style={{
                    fontSize: "12px",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "white",
                    height: "fit-content",
                  }}
                  className="badge badge-danger flex-shrink-0"
                >
                  inactif
                </span>
              )}
            </div>
            <p>
              <strong>Quantité</strong>: {product.quantity}
            </p>
            <p>
              <strong>Prix</strong>: {product.price} dt
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
