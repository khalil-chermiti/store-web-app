import React from 'react';
import AboutUsImage from '../../../../public/images/aboutusimage.jpg';
import { Col, Row } from 'reactstrap';

const AboutUs = () => {
  const aboutUsStyle = {
    backgroundColor: 'rgba(240, 248, 255, 0.8)', // Light background with 80% opacity
    padding: '20px' // Add padding for aesthetics
  };

  return (
    <div className='my-5'>
      <div style={aboutUsStyle}>
        <h2 className='text-center mb-4'>À Propos de Nous</h2>
        <Row>
          <Col md='6' className='mb-4'>
            <img
              src={AboutUsImage}
              alt='À Propos de Nous'
              className='img-fluid'
            />
          </Col>
          <Col
            md='6'
            className='mb-4 d-flex flex-column justify-content-center'
          >
            {' '}
            {/* Added Flexbox classes */}
            <h4 className='text-start'>Notre Mission</h4>
            <p>
              Dans notre parapharmacie, nous nous efforçons de fournir les
              meilleurs produits de santé et de bien-être à notre communauté.
              Notre équipe dévouée s'engage à garantir que vous ayez accès à des
              produits sûrs et efficaces.
            </p>
            <h4 className='text-start'>Nos Valeurs</h4>
            <p>
              Nous croyons en la qualité, la confiance et la satisfaction du
              client. Votre santé est notre priorité.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
