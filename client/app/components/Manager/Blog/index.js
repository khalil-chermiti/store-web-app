import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../constants';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(API_URL + '/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatTime = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '8px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      fontSize: '28px',
      color: '#109e4b', // Green for health and nature
      fontWeight: 'bold',
      margin: 0
    },
    subtitle: {
      fontSize: '16px',
      color: '#5b9279', // Softer green shade
      marginTop: '10px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '25px'
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #d6e8de',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      position: 'relative' // Ensure the button is positioned inside the card
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    content: {
      padding: '15px'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '0 0 10px',
      color: '#109e4b' // Title green color
    },
    date: {
      fontSize: '14px',
      color: '#5b9279' // Softer green for date
    },
    noBlogs: {
      textAlign: 'center',
      fontSize: '16px',
      color: '#555'
    },
    cardHoverEffect: {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
    },
    moreButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '8px 15px',
      backgroundColor: '#109e4b',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      display: 'none',
      transition: 'all 0.3s ease'
    },
    cardHover: {
      display: 'block'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Nos blogs</h2>
        <p style={styles.subtitle}>Découvrez nos derniers articles</p>
      </div>
      <div style={styles.grid}>
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={e => {
                e.currentTarget.style.transform =
                  styles.cardHoverEffect.transform;
                e.currentTarget.style.boxShadow =
                  styles.cardHoverEffect.boxShadow;
                e.currentTarget.querySelector('.moreButton').style.display =
                  'block'; // Show button on hover
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow =
                  '0 2px 10px rgba(0, 0, 0, 0.1)';
                e.currentTarget.querySelector('.moreButton').style.display =
                  'none'; // Hide button on leave
              }}
            >
              <Link to={`/blogs/${item._id}`} style={styles.link}>
                <img
                  src={
                    item.imageUrl ||
                    'https://maisondesalgues.com/api/utils/images/liquiguarana-gelules-bt-30:1732541729106.png'
                  }
                  alt={item.title}
                  style={styles.image}
                />
                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.date}>Crée le: {formatTime(item.created)}</p>
                </div>
                <button className='moreButton' style={styles.moreButton}>
                  En savoir plus
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div style={styles.noBlogs}>
            <h4>Aucun blog pour le moment.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
