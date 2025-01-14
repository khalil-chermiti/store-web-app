/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import Header from "../../components/Common/Homepage/Header";
import AboutUs from "../../components/Common/Homepage/AboutUs";
import Contact from "../Contact";
import HuilesImage from "../../../public/images/huiles.jpg";
import HuilesImage2 from "../../../public/images/vintorama2.jpg";
import HuilesImage3 from "../../../public/images/vintorama3.jpg";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <Header />
        <AboutUs />
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
        <Row>
          <section className="container py-5">
            {/* Heading */}
            <h1 className="text-center mb-4">Vintorama</h1>

            <div className="row align-items-center">
              {/* Image on the Left */}
              <div className="col-md-6">
                <CarouselSlider
                  swipeable={true}
                  showDots={true}
                  infinite={true}
                  autoPlay={false}
                  slides={banners}
                  responsive={responsiveOneItemCarousel}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={HuilesImage}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={HuilesImage2}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={HuilesImage3}
                  />
                </CarouselSlider>
              </div>
              {/* Description on the Right */}
              <div className="col-md-6">
                <p className="mb-3 mt-3">
                  Découvrez <strong>Vintorama</strong>, notre marque exclusive
                  de produits naturels. Nos préparations, composées d'huiles
                  naturelles sélectionnées avec soin par nos experts, sont
                  conçues pour répondre à divers besoins de santé et de beauté.
                  Elles aident à soulager des problèmes tels que :
                </p>
                <ul>
                  <li>Migraine</li>
                  <li>Chute des cheveux</li>
                  <li>Acné</li>
                  <li>Rides</li>
                  <li>Et bien plus encore...</li>
                </ul>
                <p>
                  Chaque produit est disponible à seulement{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    20 DT
                  </span>
                  , offrant une solution naturelle et abordable pour votre
                  bien-être.
                </p>
                <p>
                  Élaborés avec le plus grand soin, nos produits garantissent
                  une efficacité optimale tout en respectant votre santé et la
                  nature.
                </p>

                <button
                  className="button-37"
                  onClick={() => {
                    window.location.href = "/vintorama";
                  }}
                  styel={{ marginTop: "30px" }}
                >
                  Découvrez nos produits &#8594;
                </button>
              </div>
            </div>
            {/* Redirect Button */}
            <div className="text-center mt-4"></div>
          </section>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
