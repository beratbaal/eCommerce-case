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
  const [columnsCount, setColumnsCount] = useState(columns); // Dinamik column sayısı
  const itemsPerPage = 9;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumnsCount(1); // 768px altında 1 kart
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setColumnsCount(2); // 768px ile 1024px arasında 2 kart
      } else {
        setColumnsCount(3); // 1024px ve üstünde 3 kart
      }
    };

    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener("resize", handleResize); // Resize event listener ekle

    return () => {
      window.removeEventListener("resize", handleResize); // Temizleme
    };
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-20 md : p-10">
      <h1 className="text-3xl text-gray-950 font-bold mb-6">Ürün Listesi</h1>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`, // Dinamik olarak column sayısını ayarla
        }}
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
