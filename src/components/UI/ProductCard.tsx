"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

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
  const { state, dispatch } = useCart();

  const [isClicked, setIsClicked] = useState(false);

  // Sepette aynı ürün var mı?
  const existingProduct = state.items.find((item) => item.title === title);

  const handleAddToCart = () => {
    const product = {
      id: title,
      title,
      price,
      image,
      quantity: 1,
    };

    if (existingProduct) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: {
          id: title,
          quantity: existingProduct.quantity + 1,
        },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }

    console.log(`${title} sepete eklendi.`);
  };

  const quantity = existingProduct ? existingProduct.quantity : 0;

  const handleCardClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className={`relative group border rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 ${
        isClicked ? "hover:scale-100" : "hover:scale-105"
      }`}
      onClick={handleCardClick}
      onFocus={() => setIsClicked(true)} // Focus olunca da isClicked aktif olacak
    >
      <div className="h-64 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-around items-center text-white p-4 transition-opacity duration-300">
        <div>
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-300 line-clamp-4 mb-2">{description}</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start w-full justify-start">
            <p className="text-yellow-400">
              {"★".repeat(Math.round(displayRating))}
            </p>
            <span className="text-gray-400">({reviewCount} reviews)</span>
          </div>
          <div className="w-full flex justify-end">
            <Button
              variant="addToCart"
              text={`Sepete Ekle ${quantity > 0 ? `(${quantity})` : ""}`}
              onClick={handleAddToCart}
              icon={<FaShoppingCart />}
            />
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-700 font-bold">${price.toFixed(2)}</p>
      </div>

      {/* Mobildeki fiyat ve buton kısmı */}
      <div className="block md:hidden p-4 bg-white">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-bold">${price.toFixed(2)}</p>
          <Button
            variant="addToCart"
            text={`Sepete Ekle ${quantity > 0 ? `(${quantity})` : ""}`}
            onClick={handleAddToCart}
            icon={<FaShoppingCart />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
