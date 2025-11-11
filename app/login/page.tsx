"use client";

import React from "react";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-green-600 mb-6 text-center">
          🔐 Login to MyGrocery
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
