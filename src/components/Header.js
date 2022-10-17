import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex items-center justify-between px-4 py-2 bg-white">
    <Link to="/" class="font-bold text-2xl text-black-600">xFinancial</Link>
    <button
      type="button"
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Login
    </button>
  </header>
);

export default Header;
