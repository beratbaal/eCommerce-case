import React, { createContext, useReducer, ReactNode, useContext } from "react";

type CartState = {
  items: any[];
};

type CartAction =
  | { type: "ADD_TO_CART"; payload: any }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
      totalQuantity: number; // totalQuantity burada tanımlandı
    }
  | undefined
>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Sepetteki toplam miktarı hesapla
  const totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ state, dispatch, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
