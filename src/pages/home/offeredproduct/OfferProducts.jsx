import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OfferProducts.css";
import ProductCard from "../../product/ProductCard";
import { fetchProducts } from "../../../features/products/productsSlice";

const OfferProducts = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // 🔥 Filter ONLY discounted products
  const offerProducts = items.filter(
    product => product.discountPercentage >= 10
  );

  if (status === "loading") return <h2>Loading offers...</h2>;
  if (status === "error") return <h2>Error loading offers</h2>;

  return (
    <section className="offer-products">
      <h2>🔥 Hot Deals</h2>

      <div className="products-grid">
        {offerProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount={true}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferProducts;
