import React from 'react';
import './HomePage.css';

// Ensure the correct image paths
import SofaImage from '../assets/download.jpeg';
import TableImage from '../assets/download (1).jpeg';
import ArmchairImage from '../assets/download (2).jpeg';

const HomePage = () => {
  const furnitureItems = [
    { id: 1, name: 'Modern Sofa', image: SofaImage, description: 'Comfortable and stylish modern sofa.' },
    { id: 2, name: 'Wooden Table', image: TableImage, description: 'Elegant wooden dining table.' },
    { id: 3, name: 'Cozy Armchair', image: ArmchairImage, description: 'Perfect for your reading nook.' },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1>Welcome to Furniture Haven</h1>
          <p>Discover premium furniture that fits your style and budget.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </header>

      {/* Featured Furniture Section */}
      <section className="furniture">
        <div className="container">
          <h2>Featured Furniture</h2>
          <div className="furniture-grid">
            {furnitureItems.map((item) => (
              <div className="furniture-item" key={item.id}>
                <img src={item.image} alt={item.name} className="furniture-image" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button className="cta-button">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
