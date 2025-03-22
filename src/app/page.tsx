// app/page.tsx
import Products from "@/components/layout/Products";
import "../app/globals.css";
import React from "react";

export default function Page() {
  return (
    <div>
      <Products columns={3} />
    </div>
  );
}
