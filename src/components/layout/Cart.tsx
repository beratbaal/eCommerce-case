import React from "react";
import { useCart } from "../context/CartContext";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-lg font-semibold mb-4">Sepetiniz</h3>
        {cart.length === 0 ? (
          <p>Sepetinizde ürün yok.</p>
        ) : (
          <ul>
            {cart.map((item: any) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Kaldır
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Cart;
