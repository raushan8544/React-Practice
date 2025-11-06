import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Raushan Kumar</h1>
      <ul className="hidden md:flex gap-6 font-medium">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
