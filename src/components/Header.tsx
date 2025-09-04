"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-red-500">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f561152-2181-4b8b-be87-e93d8cf33aa8.png" 
                alt="Logo Fakultas Hukum" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-lg font-bold text-red-600 font-roboto">Fakultas Hukum</h1>
                <p className="text-xs text-gray-600">Portal Karier Dosen</p>
              </div>
            </div>
            
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-red-600 font-roboto text-sm font-medium transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="text-gray-700 hover:text-red-600 font-roboto text-sm font-medium transition-colors">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="text-gray-700 hover:text-red-600 font-roboto text-sm font-medium transition-colors">
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Login Icon */}
          <div className="flex items-center">
            <Link href="/login" className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="hidden sm:block font-roboto text-sm font-medium">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
