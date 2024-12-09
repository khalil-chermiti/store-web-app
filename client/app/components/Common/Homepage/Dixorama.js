import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '../../../../public/images/DixoramaImages/acné.png',
    title: 'Produit 1'
  },
  {
    src: '../../../../public/images/DixoramaImages/aphtes.png',
    title: 'Produit 2'
  },
  {
    src: '../../../../public/images/DixoramaImages/migraine.png',
    title: 'Produit 3'
  },
  {
    src: '../../../../public/images/DixoramaImages/rides.png',
    title: 'Produit 4'
  },
  {
    src: '../../../../public/images/DixoramaImages/taches.png',
    title: 'Produit 5'
  },
  {
    src: '../../../../public/images/DixoramaImages/vitiligo.png',
    title: 'Produit 6'
  },
  {
    src: '../../../../public/images/DixoramaImages/chute-cheveux.png',
    title: 'Produit 7'
  },
  {
    src: '../../../../public/images/DixoramaImages/logo.png',
    title: 'Produit 8'
  },
  {
    src: '../../../../public/images/DixoramaImages/aboutusimage.jpg',
    title: 'Produit 9'
  },
  {
    src: '../../../../public/images/DixoramaImages/logo.png',
    title: 'Produit 10'
  }
];

const Dixorama = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images in sets of 4
  const imageSets = [];
  for (let i = 0; i < images.length; i += 4) {
    imageSets.push(images.slice(i, i + 4));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageSets.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.DixoramaStyle}>
      <div style={styles.container}>
        {/* Title at the top */}
        <h2 style={styles.pageTitle}>
          Tous nos produits maisons à 10DT seulement
        </h2>

        <div style={styles.slider}>
          <div
            style={{
              ...styles.imageContainer,
              opacity: 1 // Always make the current image visible
            }}
          >
            {imageSets[currentImageIndex].map((image, index) => (
              <div key={index} style={styles.imageBox}>
                <img
                  src={image.src}
                  alt={`Product ${index + 1}`}
                  style={styles.image}
                />
                <div style={styles.overlay}>
                  <h2 style={styles.title}>{image.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  },
  DixoramaStyle: {
    backgroundColor: 'rgba(240, 248, 255, 0.8)', // Light background with 80% opacity
    padding: '20px'
  },
  pageTitle: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  slider: {
    position: 'relative',
    width: '100%',
    height: '400px', // Set a fixed height for the slider
    overflow: 'hidden' // Hide overflowing content
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease' // Smooth transition effect
  },
  imageBox: {
    position: 'relative',
    flex: 1, // Ensure each image takes up equal space
    padding: '5px',
    textAlign: 'center'
  },
  image: {
    width: '100%', // Full width of the container
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover' // Ensure the image covers the box
  },
  overlay: {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better contrast
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)', // Subtle shadow to create depth
    textAlign: 'center',
    maxWidth: '90%' // Ensure the text fits on smaller screens
  },
  title: {
    fontSize: '18px', // Adjusted font size for better readability
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px',
    lineHeight: '1.2'
  }
};

export default Dixorama;
