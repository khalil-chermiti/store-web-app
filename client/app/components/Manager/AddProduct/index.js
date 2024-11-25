/**
 *
 * AddProduct
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import { ROLES } from "../../../constants";
import Input from "../../Common/Input";
import Switch from "../../Common/Switch";
import Button from "../../Common/Button";
import SelectOption from "../../Common/SelectOption";

const AddProduct = (props) => {
  const {
    user,
    productFormData,
    formErrors,
    productChange,
    addProduct,
    brands,
    image,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
  };

  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="add-product">
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs="12" lg="6">
            <Input
              type={"text"}
              error={formErrors["sku"]}
              label={"Sku"}
              name={"sku"}
              placeholder={"Référence Produit"}
              value={productFormData.sku}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" lg="6">
            <Input
              type={"text"}
              error={formErrors["name"]}
              label={"Nom"}
              name={"name"}
              placeholder={"Nom du Produit"}
              value={productFormData.name}
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
              placeholder={"Description du Produit"}
              value={productFormData.description}
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
              placeholder={"Quantité de Produit"}
              value={productFormData.quantity}
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
              placeholder={"Prix du Produit"}
              value={productFormData.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <SelectOption
              disabled={user.role === ROLES.Merchant}
              error={formErrors["brand"]}
              name={"brand"}
              label={"Sélectionner une Marque"}
              value={
                user.role === ROLES.Merchant ? brands[1] : productFormData.brand
              }
              options={brands}
              handleSelectChange={(value) => {
                productChange("brand", value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"file"}
              error={formErrors["file"]}
              name={"image"}
              label={"Fichier"}
              placeholder={"Veuillez télécharger une image"}
              value={image}
              onInputChange={(name, value) => {
                setSelectedImage(URL.createObjectURL(value));
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12" className="my-2">
            <Switch
              id={"active-product"}
              name={"isActive"}
              label={"Actif ?"}
              checked={productFormData.isActive}
              toggleCheckboxChange={(value) => productChange("isActive", value)}
            />
          </Col>
        </Row>
        <hr />

        {selectedImage && (
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
              alt="produit"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
        )}
        <div className="add-product-actions">
          <Button type="submit" text="Ajouter" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
