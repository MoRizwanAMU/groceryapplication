"use client";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white flex items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold">MyGrocery</h1>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:underline">
            Departments
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Deals
          </a>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
        <input
          type="text"
          placeholder="Search for products..."
          className="px-4 py-2 w-full text-black outline-none"
        />
        <button className="bg-yellow-400 p-2">
          <Search className="text-black" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <User className="cursor-pointer hover:text-yellow-300" />
        <ShoppingCart className="cursor-pointer hover:text-yellow-300" />
      </div>
    </nav>
  );
}
