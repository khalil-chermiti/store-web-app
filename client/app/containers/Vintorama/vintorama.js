import React, { useEffect } from "react";
import preparations from "./preparations.js";
import { Link } from "react-router-dom";
import imagePlaceholder from "../../../public/images/placeholder-image.png";

const Vintorama = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://maisondesalgues.com/api/product/list/vintorama",
      );
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container py-5">
      {/* Page Heading */}
      <h1 className="text-center mb-3" style={{ color: "green" }}>
        Produits Vintorama a <strong>20dt</strong>
      </h1>
      <p className="text-center mb-5 big-parag">
        Découvrez notre sélection exceptionnelle d'huiles naturelles,
        soigneusement élaborées pour répondre à vos besoins de bien-être et de
        beauté
      </p>

      {/* Grid Layout */}
      <div className="row">
        {products?.map((product, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <Link to={`/product/${product.slug}`}>
              <div className="card h-100 box-shadow-1">
                {/* Product Image */}
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src={imagePlaceholder}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}

                {/* Product Details */}
                <div className="card-body d-flex flex-column">
                  <h4
                    className="card-title text-center"
                    style={{ color: "lightgreen" }}
                  >
                    {product.name}
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vintorama;
