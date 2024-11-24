/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col, Button } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import Header from "../../components/Common/Homepage/Header";
import AboutUs from "../../components/Common/Homepage/AboutUs";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import { DixoloramaCarousel } from "../dixolorama/Dixolorama";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <Header />
        <AboutUs />
        Contactez-nous
        <Contact />
        <Row className="flex-row my-5">
          <Col xs="12" lg="6" className="order-lg-2 mb-3 px-3 px-md-2">
            <div className="home-carousel">
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-1 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img src="/images/banners/banner2.jpg" className="mb-3" />
              <img src="/images/banners/banner3.jpg" />
            </div>
          </Col>
          <Col xs="12" lg="3" className="order-lg-3 mb-3 px-3 px-md-2">
            <div className="d-flex flex-column h-100 justify-content-between">
              <img src="/images/banners/banner1.jpg" className="mb-3" />
              <img src="/images/banners/banner2.jpg" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);

/* <div
  className="mt-5 text-center"
  style={{
    backgroundColor: "#eaf4e2",
    padding: "40px",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  }}
>
  <h4
    style={{
      color: "#4B6F44",
      fontWeight: "bold",
      fontSize: "24px",
      marginBottom: "20px",
    }}
  >
    À propos de Diaxorama
  </h4>
  <p
    style={{
      color: "#6c757d",
      fontSize: "16px",
      marginBottom: "30px",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "1.6",
    }}
  >
    Diaxorama est votre destination en ligne dédiée aux préparations
    pharmaceutiques naturelles à base d'huiles essentielles. Nos solutions
    offrent des bienfaits pour divers problèmes de santé, et chaque produit est
    disponible à un prix accessible de moins de 10 DT.
  </p>

  <div
    style={{
      marginBottom: "20px",
      padding: "10px",
      borderRadius: "8px",
    }}
  >
    <DixoloramaCarousel />
  </div>

  <Link to="/shop/category/dixolorama-10dt" style={{ textDecoration: "none" }}>
    <Button
      color="info"
      style={{
        fontWeight: "bold",
        fontSize: "16px",
        padding: "12px 30px",
        borderRadius: "5px",
        marginTop: "1rem",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      Produits Dixolorama
    </Button>
  </Link>
</div>; */
