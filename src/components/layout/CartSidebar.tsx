import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartSidebar: React.FC = () => {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <FaShoppingCart
        className="text-2xl cursor-pointer"
        onClick={toggleSidebar}
      />
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Sepet</h2>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="p-4">
          {state.items.length === 0 ? (
            <p>Sepetiniz boş.</p>
          ) : (
            state.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Miktar: {item.quantity}</p> {/* Miktar */}
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="text-red-500"
                >
                  Sil
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
