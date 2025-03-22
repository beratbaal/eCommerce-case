"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../UI/ProductCard";
import Pagination from "../UI/Pagination";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h1 className="text-3xl text-gray-950 font-bold mb-6">Ürün Listesi</h1>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {paginatedProducts.map((product) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
