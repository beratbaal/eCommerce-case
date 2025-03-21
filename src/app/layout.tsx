"use client";

import React from "react";
import { CartProvider } from "../context/CartContext";
import "../app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <CartProvider>
            <header className="p-4 bg-blue-600 text-white text-center">
              <h1 className="text-2xl font-bold">E-Ticaret Sitesi</h1>
            </header>
            <main>{children}</main>
            <footer className="p-4 bg-blue-600 text-white text-center">
              <p>&copy;2025 E-Ticaret</p>
            </footer>
          </CartProvider>
        </body>
      </html>
    </>
  );
}
