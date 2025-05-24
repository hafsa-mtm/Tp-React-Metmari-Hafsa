import React, { useState } from 'react';
import './catalog.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  details?: string;
}

const Catalog: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Tech products data with verified image URLs and details
  const products: Product[] = [
    {
      id: 1,
      name: 'ProBook Laptop',
      price: 999.99,
      description: '15.6" FHD, Intel Core i7, 16GB RAM, 512GB SSD',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.5,
      details: 'Premium aluminum chassis with backlit keyboard. Features Thunderbolt 4 ports, Wi-Fi 6, and 10-hour battery life.'
    },
    {
      id: 2,
      name: 'NoiseFree Headphones',
      price: 179.99,
      description: 'Active noise cancellation, 30hr battery life',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.2,
      details: 'Industry-leading noise cancellation with 40mm drivers. Includes carrying case and 3.5mm audio cable.'
    },
    {
      id: 3,
      name: 'CrystalView 4K Monitor',
      price: 349.99,
      description: '27" 4K UHD, HDR10, 99% sRGB',
      image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.7,
      details: 'IPS panel with 178° viewing angles. Includes HDMI, DisplayPort, and USB hub.'
    },
    {
      id: 4,
      name: 'SwiftClick Mouse',
      price: 59.99,
      description: 'Wireless, 16000 DPI, 6 programmable buttons',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.3,
      details: 'Ergonomic design with customizable RGB lighting. 50-hour battery life with quick charge.'
    },
    {
      id: 5,
      name: 'PowerBoost Charger',
      price: 39.99,
      description: '65W USB-C PD, GaN technology, compact design',
      image: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.4,
      details: 'Charges laptop, phone, and tablet simultaneously. Foldable prongs for easy storage.'
    },
    {
      id: 6,
      name: 'ZenBook Ultra',
      price: 1299.99,
      description: '14" OLED, AMD Ryzen 9, 32GB RAM, 1TB SSD',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      details: 'Sleek 2.8lbs magnesium alloy body with NumberPad 2.0. Pantone validated display.'
    },
    {
      id: 7,
      name: 'SoundBar Pro',
      price: 249.99,
      description: 'Dolby Atmos, 120W output, wireless subwoofer',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.6,
      details: 'Includes HDMI ARC, optical, and Bluetooth 5.0 connectivity. Wall-mountable design.'
    },
    {
      id: 8,
      name: 'SmartWatch X',
      price: 199.99,
      description: 'AMOLED display, 14-day battery, health tracking',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      rating: 4.1,
      details: 'Tracks heart rate, SpO2, and sleep. Water resistant to 50m with customizable watch faces.'
    }
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
        <h1>Tech Store</h1>
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
                <div className="button-group">
                  <button className="view-details" onClick={() => handleViewDetails(product)}>
                    Details
                  </button>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {showModal && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-image-container">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-info">
              <h2>{selectedProduct.name}</h2>
              {renderStars(selectedProduct.rating)}
              <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
              <p className="modal-description">{selectedProduct.description}</p>
              <div className="modal-details">
                <h3>Product Details</h3>
                <p>{selectedProduct.details}</p>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;