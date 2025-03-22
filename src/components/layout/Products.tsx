"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../UI/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsProps {
  columns?: number;
}

const Products: React.FC<ProductsProps> = ({ columns = 4 }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Ürün Listesi</h1>
      <div
        className={`grid grid-cols-${columns} gap-6`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
