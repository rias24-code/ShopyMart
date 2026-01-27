import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { removeFromWishlist } from '../../features/wishlist/wishlistSlice'
import './wishlistPage.css'

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  if (wishlist.length === 0) {
  return (
    <div className="empty-wishlist">
      <img src="/images/empty.jpg" alt="Empty Wishlist" />
      <h2>Your wishlist is empty</h2>
      <p>Add items you love ❤️</p>
    </div>
  );
}

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>

      {wishlist.map(item => (
        <div key={item.id} className="wishlist-item">
          <img src={item.thumbnail} alt={item.title} />
          
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <button
              onClick={() => {
                dispatch(addToCart(item));
                dispatch(removeFromWishlist(item.id));
              }}
            >
              Move to Cart
            </button>

            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;
