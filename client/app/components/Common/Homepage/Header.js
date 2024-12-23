import React from "react";
import { Jumbotron } from "reactstrap";
import backgroundImage from "../../../../public/images/headerJumbo.jpg";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  const jumbotronStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  };

  const titleStyle = {
    color: "white",
    fontSize: "3rem",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
    position: "relative",
    zIndex: 1,
    maxWidth: "90%",
    lineHeight: "1.2",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    color: "white",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
    position: "relative",
    zIndex: 1,
    maxWidth: "90%",
    lineHeight: "1.4",
  };

  return (
    <Jumbotron style={jumbotronStyle} className="text-center mb-5">
      <div style={overlayStyle} />
      <p
        className="display-4"
        style={{
          ...titleStyle,
          fontSize: window.innerWidth < 768 ? "2rem" : "3rem", // Adjust font size for mobile
        }}
      >
        Bienvenue à Votre Maison des Algues
      </p>
      <p
        className="lead"
        style={{
          ...subtitleStyle,
          fontSize: window.innerWidth < 768 ? "1rem" : "1.5rem", // Adjust font size for mobile
        }}
      >
        Votre santé est notre priorité. Découvrez notre sélection de produits
        bio, soins parapharmaceutiques et médicaux enrichis en algues et huiles
        naturelles.
      </p>

      <NavLink to="/shop" style={{ color: "inherit", textDecoration: "none" }}>
        <button
          style={{ position: "relative", zIndex: 1 }}
          className="button-37"
        >
          Visiter notre boutique
        </button>
      </NavLink>
    </Jumbotron>
  );
};

export default Header;
