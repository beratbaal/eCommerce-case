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
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <p className="text-gray-500 text-sm mt-2">{description}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">
          {"★".repeat(Math.round(displayRating))}
        </span>
        <span className="text-gray-500 ml-2">({reviewCount} reviews)</span>
      </div>
    </div>
  );
};

export default ProductCard;
