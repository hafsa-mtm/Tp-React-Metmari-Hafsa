import React, { useState } from 'react';
import './catalog.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

const Catalog: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Tech products data with verified image URLs
  const products: Product[] = [
    {
      id: 1,
      name: 'ProBook Laptop',
      price: 999.99,
      description: '15.6" FHD, Intel Core i7, 16GB RAM, 512GB SSD',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.5
    },
    {
      id: 2,
      name: 'NoiseFree Headphones',
      price: 179.99,
      description: 'Active noise cancellation, 30hr battery life',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.2
    },
    {
      id: 3,
      name: 'CrystalView 4K Monitor',
      price: 349.99,
      description: '27" 4K UHD, HDR10, 99% sRGB',
      image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.7
    },
    {
      id: 4,
      name: 'SwiftClick Mouse',
      price: 59.99,
      description: 'Wireless, 16000 DPI, 6 programmable buttons',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.3
    },
    // New products added below
    {
      id: 5,
      name: 'PowerBoost Charger',
      price: 39.99,
      description: '65W USB-C PD, GaN technology, compact design',
      image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.4
    },
    {
      id: 6,
      name: 'ZenBook Ultra',
      price: 1299.99,
      description: '14" OLED, AMD Ryzen 9, 32GB RAM, 1TB SSD',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.8
    },
    {

  id: 7,
  name: 'SoundBar Pro',
  price: 249.99,
  description: 'Dolby Atmos, 120W output, wireless subwoofer',
  image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  rating: 4.6
    },
    {
      id: 8,
      name: 'SmartWatch X',
      price: 199.99,
      description: 'AMOLED display, 14-day battery, health tracking',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.1
    }
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'star filled' : 'star'}>
            {i < rating ? '★' : '☆'}
          </span>
        ))}
        <span className="rating-number">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="catalog">
      <header className="catalog-header">
        <h1>Tech Haven</h1>
        <p className="subtitle">Premium electronics for work and play</p>
      </header>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className={`image-container ${loadedImages[product.id] ? 'loaded' : 'loading'}`}>
              <img 
                src={product.image} 
                alt={product.name}
                onLoad={() => handleImageLoad(product.id)}
                className={loadedImages[product.id] ? 'loaded' : ''}
              />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              {renderStars(product.rating)}
              <p className="description">{product.description}</p>
              <div className="price-container">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;