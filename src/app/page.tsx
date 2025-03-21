// app/page.tsx
import Products from "@/components/Products";
import React from "react";

export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Ürün Listesi</h2>
      <Products />
    </div>
  );
}
