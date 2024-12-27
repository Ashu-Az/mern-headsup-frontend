import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductGrid from "../assets/components/shop/ProductGrid";
import FilterPanel from "../assets/components/shop/FilterPanel";
import { fetchProducts } from "./slices/productSlice.js";
// Shop.jsx
const Shop = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);

  const handleFilter = (queryString) => {
    dispatch(fetchProducts(queryString));
  };

  return (
    <div className="container mx-auto px-4">
      <FilterPanel onFilter={handleFilter} />
      {products?.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-center py-4">No products found</p>
      )}
    </div>
  );
};

export default Shop;