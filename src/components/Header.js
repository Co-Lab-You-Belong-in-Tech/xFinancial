import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header class="flex items-center justify-between px-4 py-2 bg-white">
      <Link href="#" class="font-bold text-2xl text-black-600">XFINANCIAL</Link>
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </header>
  )
}
