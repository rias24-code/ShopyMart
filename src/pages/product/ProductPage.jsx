import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from '../../features/products/productsSlice'
import ProductCard from "./ProductCard";
import './productPage.css'

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <h2>Loading products...</h2>;
  if (status === "error") return <h2>Error loading products</h2>;

  return (
    <div className="product-grid">
      {items.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsPage;
