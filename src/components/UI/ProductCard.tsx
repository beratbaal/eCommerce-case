"use client";
import React from "react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  } | null;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  description,
  rating,
}) => {
  const displayRating = rating ? rating.rate : 0;
  const reviewCount = rating ? rating.count : 0;

  return (
    <div className="relative group border rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <div className="h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-300 line-clamp-5 mb-2">{description}</p>
        <div className="flex flex-col items-start w-full justify-start">
          <p className="text-yellow-400">
            {"★".repeat(Math.round(displayRating))}
          </p>
          <span className="text-gray-400">({reviewCount} reviews)</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-700 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
