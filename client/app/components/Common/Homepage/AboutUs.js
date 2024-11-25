import React from 'react';
import AboutUsImage from '../../../../public/images/aboutusimage.jpg';
import { Col, Row } from 'reactstrap';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const AboutUs = () => {

  const aboutUsStyle = {
    backgroundColor: 'rgba(240, 248, 255, 0.8)', // Light background with 80% opacity
    padding: '40px 20px', // Add padding for aesthetics
    margin: '4rem auto', // Center the content
  };

  return (
    <div className='my-5'>
      <Helmet>
        <title>
          À Propos de Maison des Algues - Produits Bio et Parapharmacie
        </title>
        <meta
          name='description'
          content="Découvrez la mission et les valeurs de Maison des Algues, une boutique spécialisée dans les produits bio, parapharmacie, et soins à base d'algues et d'huiles naturelles."
        />
      </Helmet>

      <div style={aboutUsStyle}>
        <h2 className='text-center mb-4'>À Propos de Maison des Algues</h2>
        <Row>
          <Col md='6' className='mb-4'>
            <img
              src={AboutUsImage}
              alt='Maison des Algues - Bio and Parapharmacy Products with Seaweed and Oils'
              className='img-fluid'
            />
          </Col>
          <Col
            md='6'
            className='mb-4 d-flex flex-column justify-content-center'
          >
            <h4 className='text-start'>Notre Mission</h4>
            <p>
              Chez <strong>Maison des Algues</strong>, notre mission est de
              fournir des produits bio de haute qualité pour le bien-être et la
              santé. Nous proposons une gamme de produits de parapharmacie
              naturels, enrichis en algues et huiles essentielles, qui
              soutiennent une vie saine et naturelle.
            </p>
            <h4 className='text-start'>Nos Valeurs</h4>
            <p>
              Nous croyons en la pureté, la qualité, et le respect de la nature.
              Chaque produit de <strong>Maison des Algues</strong> est
              sélectionné pour ses bienfaits et son efficacité, offrant à notre
              clientèle une solution saine et durable pour le bien-être
              quotidien.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
