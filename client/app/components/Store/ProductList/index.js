/**
 *
 * ProductList
 *
 */

import React from "react";

import { Link } from "react-router-dom";

import AddToWishList from "../AddToWishList";
import Button from "../../Common/Button";

const ProductList = (props) => {
  const { products, updateWishlist, authenticated } = props;

  function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  }

  function isLiked(id) {
    const res =
      getWishlist().findIndex((el) => el.toString() === id.toString()) != -1
        ? true
        : false;

    console.log("product with id : " + id + "is ", res ? "liked" : "not liked");

    return res;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="mb-3 mb-md-0">
          <div className="product-container">
            <div className="item-box">
              <div className="add-wishlist-box">
                <AddToWishList
                  id={product._id}
                  liked={isLiked(product._id)}
                  enabled={authenticated}
                  updateWishlist={updateWishlist}
                  authenticated={authenticated}
                />
              </div>

              <div className="item-link">
                <Link
                  to={`/product/${product.slug}`}
                  className="d-flex flex-column h-100"
                >
                  <div className="item-image-container">
                    <div className="item-image-box">
                      <img
                        className="item-image"
                        src={`${
                          product.imageUrl
                            ? product.imageUrl
                            : "/images/placeholder-image.png"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="item-details p-3">
                      <h1 className="item-name">{product.name}</h1>
                      {product.brand &&
                        Object.keys(product.brand).length > 0 && (
                          <p className="by">
                            Par <span>{product.brand.name}</span>
                          </p>
                        )}
                      <div className="ql-editor">
                        <p
                          style={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            textOverflow: "ellipsis",
                          }}
                          className="mb-2  "
                          // dangerouslySetInnerHTML={{
                          //   __html: product.description,
                          // }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center px-4 mb-2 item-footer">
                    <p className="price mb-0">{product.price} DT</p>
                    {product.totalReviews > 0 && (
                      <p className="mb-0">
                        <span className="fs-16 fw-normal mr-1">
                          {parseFloat(product?.averageRating).toFixed(1)}
                        </span>
                        <span
                          className={`fa fa-star ${
                            product.totalReviews !== 0 ? "checked" : ""
                          }`}
                          style={{ color: "#ffb302" }}
                        ></span>
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
