import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet"; // Import Helmet for SEO

import actions from "../../actions";
import Input from "../../components/Common/Input";

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = (event) => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div
        className="contact"
        style={{
          margin: "1rem 0",
          backgroundColor: "rgba(240, 248, 255, 0.8)",
          borderRadius: "10px",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Helmet for SEO */}
        <Helmet>
          <title>Contactez Maison des Algues</title>
          <meta
            name="description"
            content="Contactez Maison des Algues pour toute demande concernant nos produits bio, parapharmacie, et soins à base d'algues et d'huiles naturelles."
          />
        </Helmet>
        <h2
          className="text-center"
          style={{
            marginBottom: "1rem",
          }}
        >
          Contactez nous
        </h2>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs="12" md="6">
              <Input
                type={"text"}
                error={formErrors["name"]}
                label={"Nom"}
                name={"name"}
                placeholder={"Votre nom complet"}
                value={contactFormData.name}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs="12" md="6">
              <Input
                type={"text"}
                error={formErrors["email"]}
                label={"E-mail"}
                name={"email"}
                placeholder={"Votre adresse e-mail"}
                value={contactFormData.email}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs="12" md="12">
              <Input
                type={"textarea"}
                error={formErrors["message"]}
                label={"Message"}
                name={"message"}
                rows={10}
                placeholder={"Veuillez décrire votre message"}
                value={contactFormData.message}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
          </Row>
          <div className="contact-actions">
            <button className="button-37">Soumettre</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors,
  };
};

export default connect(mapStateToProps, actions)(Contact);
