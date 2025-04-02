import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="rating-info">
          <span>Average Rating: {product.avgRating.toFixed(1)}</span>
          <span>Total Ratings: {product.totalRatings}</span>
        </div>
        <RatingWidget 
          productId={product.id} 
          onRatingSubmit={onRatingSubmit} 
        />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard; 