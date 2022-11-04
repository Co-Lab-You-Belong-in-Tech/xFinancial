import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => (
  <header className="flex items-center justify-between px-4 py-2 bg-white">
    <div className="flex space-x-10 items-center justify-start">
      <img className="w-1/5 rounded-lg" alt="Xfinancial" src={Logo} />
      <Link to="/" className="text-sm font-medium leading-tight text-gray-800">Home</Link>
      <Link to="/" className="text-sm font-medium leading-tight text-gray-800">About</Link>
    </div>
    <div className="flex items-center justify-center h-full px-4 py-2 bg-blue-600 rounded-xl">
      <Link
        to="/goals"
        className="text-sm font-medium leading-tight text-white bg-blue-600 rounded hover:bg-blue-600"
      >
        Get started
      </Link>
    </div>
  </header>
);

export default Header;
