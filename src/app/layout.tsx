"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Sepet ikonu için import
import { CartProvider } from "../context/CartContext";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </>
  );
}
