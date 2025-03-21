// app/page.tsx
import React from "react";
import Products from "../components/Products";

export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Ürün Listesi</h2>
      <Products />
    </div>
  );
}
