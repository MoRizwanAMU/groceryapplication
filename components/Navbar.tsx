// "use client";
// import { ShoppingCart, User, Search } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-700 text-white flex items-center justify-between px-6 py-3 shadow-md">
//       <div className="flex items-center gap-6">
//         <h1 className="text-2xl font-bold">MyGrocery</h1>
//         <div className="hidden md:flex items-center gap-4">
//           <a href="#" className="hover:underline">
//             Departments
//           </a>
//           <a href="#" className="hover:underline">
//             Services
//           </a>
//           <a href="#" className="hover:underline">
//             Deals
//           </a>
//         </div>
//       </div>

//       {/* Search bar */}
//       <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="px-4 py-2 w-full text-black outline-none"
//         />
//         <button className="bg-yellow-400 p-2">
//           <Search className="text-black" />
//         </button>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center gap-6">
//         <User className="cursor-pointer hover:text-yellow-300" />
//         <ShoppingCart className="cursor-pointer hover:text-yellow-300" />
//       </div>
//     </nav>
//   );
// }




























































// "use client";

// import { Menu, ShoppingCart, User, Search } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="bg-[#0071dc] text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left Section - Hamburger + Logo */}
//         <div className="flex items-center space-x-3">
//           <button className="p-1 hover:bg-[#005bb5] rounded-md">
//             <Menu className="w-6 h-6" />
//           </button>
//           <h1 className="text-xl font-bold tracking-tight">MyGrocery</h1>
//         </div>

//         {/* Middle Section - Search Bar */}
//         <div className="hidden md:flex flex-1 mx-6">
//           <div className="flex items-center w-full bg-white rounded-full overflow-hidden">
//             <input
//               type="text"
//               placeholder="Search groceries..."
//               className="flex-grow px-4 py-2 text-black outline-none"
//             />
//             <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-r-full">
//               <Search className="w-5 h-5 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section - User + Cart */}
//         <div className="flex items-center space-x-4">
//           <button className="hover:bg-[#005bb5] p-2 rounded-md">
//             <User className="w-6 h-6" />
//           </button>
//           <button className="relative hover:bg-[#005bb5] p-2 rounded-md">
//             <ShoppingCart className="w-6 h-6" />
//             <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full px-1.5">
//               0
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search Bar */}
//       <div className="md:hidden bg-white px-3 py-2 flex items-center space-x-2">
//         <Search className="w-5 h-5 text-gray-600" />
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="flex-grow text-black outline-none"
//         />
//       </div>
//     </header>
//   );
// }











































// "use client";

// import { Menu, ShoppingCart, User, Search } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="bg-[#0071dc] text-white shadow">
//       <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
//         {/* Left: Menu + Logo */}
//         <div className="flex items-center space-x-2">
//           <button className="p-1 hover:bg-[#005bb5] rounded-md">
//             <Menu className="w-5 h-5" />
//           </button>
//           <h1 className="text-lg font-bold tracking-tight">MyGrocery</h1>
//         </div>

//         {/* Middle: Search Bar (Desktop only) */}
//         <div className="hidden md:flex flex-1 mx-4">
//           <div className="flex items-center w-full bg-white rounded-full overflow-hidden shadow-sm">
//             <input
//               type="text"
//               placeholder="Search for groceries..."
//               className="flex-grow px-3 py-1.5 text-black text-sm outline-none"
//             />
//             <button className="bg-yellow-400 hover:bg-yellow-500 p-1.5 rounded-r-full">
//               <Search className="w-4 h-4 text-black" />
//             </button>
//           </div>
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center space-x-2">
//           <button className="hover:bg-[#005bb5] p-1.5 rounded-md">
//             <User className="w-5 h-5" />
//           </button>
//           <button className="relative hover:bg-[#005bb5] p-1.5 rounded-md">
//             <ShoppingCart className="w-5 h-5" />
//             <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold rounded-full px-[4px]">
//               0
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search Bar */}
//       <div className="md:hidden bg-white px-3 py-1.5 flex items-center space-x-2">
//         <Search className="w-4 h-4 text-gray-600" />
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="flex-grow text-sm text-black outline-none"
//         />
//       </div>
//     </header>
//   );
// }










































"use client";

import { Menu, ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#0071dc] text-white shadow">
      {/* ✅ Top Bar */}
      <div className="max-w-7xl mx-auto px-3 py-3 sm:py-2 flex items-center justify-between">
        {/* Left: Menu + Logo */}
        <div className="flex items-center space-x-2">
          <button className="p-1 sm:p-1.5 hover:bg-[#005bb5] rounded-md">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h1 className="text-base sm:text-lg font-bold tracking-tight">
            MyGrocery
          </h1>
        </div>

        {/* Middle: Search Bar (Desktop Only) */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="flex items-center w-full bg-white rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for groceries..."
              className="flex-grow px-3 py-2 text-black text-sm outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-r-full">
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-2">
          <button className="hover:bg-[#005bb5] p-1 sm:p-2 rounded-md">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="relative hover:bg-[#005bb5] p-1 sm:p-2 rounded-md">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] font-bold rounded-full px-[4px]">
              0
            </span>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Search Bar (smaller on mobile) */}
      <div className="md:hidden bg-white px-2 py-1.5 sm:py-2 flex items-center space-x-2">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow text-sm text-black outline-none"
        />
      </div>
    </header>
  );
}
