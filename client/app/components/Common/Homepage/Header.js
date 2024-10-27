import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

import backgroundImage from '../../../../public/images/headerJumbo.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const jumbotronStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    position: 'relative' // For absolute positioning of overlay
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    zIndex: 0 // Ensure it’s behind the text and button
  };

  return (
    <Jumbotron style={jumbotronStyle} className='text-center mb-5'>
      <div style={overlayStyle} /> {/* Overlay for better text visibility */}
      <p
        className='display-4'
        style={{
          color: 'white',
          fontSize: '3rem',
          textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          zIndex: 1
        }}
      >
        Bienvenue dans notre Parapharmacie
      </p>
      <p
        className='lead'
        style={{
          fontSize: '1.5rem',
          color: 'white',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          zIndex: 1
        }}
      >
        Votre santé est notre priorité. Découvrez une gamme de produits pour
        votre bien-être.
      </p>
      <Button
        color='success'
        style={{ position: 'relative', zIndex: 1, color: 'white' }}
      >
        <NavLink to='/shop' style={{ color: 'white' }}>
          Visiter la Boutique
        </NavLink>
      </Button>
    </Jumbotron>
  );
};

export default Header;
