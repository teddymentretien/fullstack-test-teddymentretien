"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Link href="/boutique">Boutique</Link>
          <Link href="/admin">Admin</Link>
        </div>
        <div className="relative">
          <Link href="/panier" className="relative">
            Panier
            {totalItems > 0 && (
              <span
                className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
