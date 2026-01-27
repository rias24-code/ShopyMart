import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      <button onClick={() => dispatch(addToWishlist(product))}>
        ❤️ Wishlist
      </button>
    </div>
  );
};

export default ProductCard;
