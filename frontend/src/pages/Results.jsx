import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation();
  const products = state?.products || [];

  return (
    <div className="results">
      <h2>Recommended Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;