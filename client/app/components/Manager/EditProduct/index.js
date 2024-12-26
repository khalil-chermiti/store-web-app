/**
 *
 * EditProduct
 *
 */

import React from "react";

import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import { ROLES } from "../../../constants";
import Input from "../../Common/Input";
import Switch from "../../Common/Switch";
import Button from "../../Common/Button";
import SelectOption from "../../Common/SelectOption";

const EditProduct = (props) => {
  const {
    user,
    product,
    productChange,
    formErrors,
    brands,
    updateProduct,
    deleteProduct,
    activateProduct,
    image,
  } = props;

  const [selectedImage, setSelectedImage] = React.useState(product.imageUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct();
  };

  return (
    <div className="edit-product">
      <div className="d-flex flex-row mx-0 mb-3">
        <label className="mr-1">Lien du produit </label>
        <Link to={`/product/${product.slug}`} className="default-link">
          {product.slug}
        </Link>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs="12">
            <Input
              type={"text"}
              error={formErrors["name"]}
              label={"Nom"}
              name={"name"}
              placeholder={"Nom du produit"}
              value={product.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12">
            <Input
              type={"text"}
              error={formErrors["sku"]}
              label={"Sku"}
              name={"sku"}
              placeholder={"Sku du produit"}
              value={product.sku}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12">
            <Input
              type={"text"}
              error={formErrors["slug"]}
              label={"Slug"}
              name={"slug"}
              placeholder={"Slug du produit"}
              value={product.slug}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"ReactQuill"}
              error={formErrors["description"]}
              label={"Description"}
              name={"description"}
              placeholder={"Description du produit"}
              value={product.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"number"}
              error={formErrors["quantity"]}
              label={"Quantité"}
              name={"quantity"}
              decimals={false}
              placeholder={"Quantité du produit"}
              value={product.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"number"}
              error={formErrors["price"]}
              label={"Prix"}
              name={"price"}
              min={1}
              placeholder={"Prix du produit"}
              value={product.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>

          {user.role === ROLES.Admin && (
            <Col xs="12" md="12">
              <SelectOption
                error={formErrors["brand"]}
                label={"Sélectionner la marque"}
                multi={false}
                value={product.brand}
                options={brands}
                handleSelectChange={(value) => {
                  productChange("brand", value);
                }}
              />
            </Col>
          )}

          <Col xs="12" md="12">
            <Input
              type={"file"}
              error={formErrors["file"]}
              name={"image"}
              label={"fichier"}
              placeholder={"Veuillez télécharger l'image"}
              value={image}
              onInputChange={(name, value) => {
                setSelectedImage(URL.createObjectURL(value));
                productChange(name, value);
              }}
            />
          </Col>

          <Col xs="12" md="12" className="mt-3 mb-2">
            <Switch
              id={`enable-product-${product._id}`}
              name={"isActive"}
              label={"Actif ?"}
              checked={product?.isActive}
              toggleCheckboxChange={(value) => {
                productChange("isActive", value);
                activateProduct(product._id, value);
              }}
            />
          </Col>
        </Row>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            overflow: "hidden",
            margin: "10px 0",
          }}
        >
          <img
            src={selectedImage}
            alt="product"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
        <hr />
        <div className="d-flex flex-column flex-md-row">
          <Button
            type="submit"
            text="Enregistrer"
            className="mb-3 mb-md-0 mr-0 mr-md-3"
          />
          <Button
            variant="danger"
            text="Supprimer"
            onClick={() => {
              if (
                window.confirm("Voulez-vous vraiment supprimer ce produit ?")
              ) {
                deleteProduct(product._id);
              }
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
