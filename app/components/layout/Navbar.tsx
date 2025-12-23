import { ChevronDown, Menu, ShoppingBag, User, X } from "lucide-react";
import React, { useState } from "react"

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <nav className="w-full py-6 px-4 md:px-8 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-black"></div>
                <div className="w-2 h-2 bg-black"></div>
                <div className="w-2 h-2 bg-black"></div>
                <div className="w-2 h-2 bg-transparent"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">Ambera</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center bg-white/80 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gray-100 shadow-sm">
            <a href="#" className="px-4 py-1 text-sm font-medium text-gray-900">
                Home
            </a>
            <a href="#" className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1">
                Catalogue <ChevronDown size={14} />
            </a>
            <a href="#" className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Shop
            </a>
            <a href="#" className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Solutions
            </a>
            <a href="#" className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                FAQ
            </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                <ShoppingBag size={16} />
                <span>Cart (2)</span>
            </button>
            <button className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
                Register
            </button>
            <button className="p-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                <User size={18} />
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-lg rounded-b-2xl flex flex-col gap-4 md:hidden z-50 animate-in slide-in-from-top-5">
            <a href="#" className="text-lg font-medium">
                Home
            </a>
            <a href="#" className="text-lg font-medium flex items-center justify-between">
                Catalogue <ChevronDown size={16} />
            </a>
            <a href="#" className="text-lg font-medium">
                Shop
            </a>
            <a href="#" className="text-lg font-medium">
                Solutions
            </a>
            <a href="#" className="text-lg font-medium">
                FAQ
            </a>
            <div className="h-px bg-gray-100 my-2"></div>
            <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-full text-sm font-medium">
                    <ShoppingBag size={16} /> Cart
                </button>
                <button className="flex-1 px-4 py-3 rounded-full text-sm font-medium border border-gray-300">
                    Register
                </button>
            </div>
        </div>}
    </nav>;
};

export default Navbar;
