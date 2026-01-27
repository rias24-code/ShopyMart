import React from "react";
import "./OfferProducts.css";
import productsData from '../../../data/products.json';

const OfferProducts = () => {
  // Only show products with discounts
  const offerProducts = productsData.products.filter(
    (product) => product.discountPercentage > 0
  );

  return (
    <section className="offer-products">
      <h2>🔥 Hot Deals</h2>
      <div className="products-grid">
        {offerProducts.map((product) => {
          const discountedPrice = Math.round(
            product.price * (1 - product.discountPercentage / 100)
          );

          return (
            <div className="product-card" key={product.id}>
              <div className="product-img">
                <img src={product.thumbnail} alt={product.title} />
                <span className="discount-badge">
                  {product.discountPercentage}% OFF
                </span>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="brand">{product.brand}</p>
                <div className="price-section">
                  <span className="price">₹{discountedPrice}</span>
                  <span className="original-price">₹{product.price}</span>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfferProducts;
