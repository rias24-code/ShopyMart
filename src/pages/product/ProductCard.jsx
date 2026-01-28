import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({ product, showDiscount = false }) => {
  const dispatch = useDispatch();

  const discountedPrice = showDiscount
    ? Math.round(product.price * (1 - product.discountPercentage / 100))
    : product.price;

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.thumbnail} alt={product.title} />

        {showDiscount && (
          <span className="discount-badge">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="brand">{product.brand}</p>

        <div className="price-section">
          <span className="price">₹{discountedPrice}</span>

          {showDiscount && (
            <span className="original-price">₹{product.price}</span>
          )}
        </div>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>

        <button onClick={() => dispatch(addToWishlist(product))}>
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
