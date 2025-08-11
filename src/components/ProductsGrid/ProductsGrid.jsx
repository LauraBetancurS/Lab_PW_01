import React from "react";
import "./ProductsGrid.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { productsData } from "../../data/productsData.js";

export default function ProductsGrid() {
  // aseguramos 6 items (2x3)
  const items = productsData.slice(0, 6);

  return (
    <section className="products-grid" aria-label="Our products">
      {items.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </section>
  );
}
