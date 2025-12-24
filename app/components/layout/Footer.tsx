import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";
import React, { type MouseEvent } from "react"
import { Link } from "react-router";

const Footer: React.FC = () => {
    const smoothScrollTo = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            history.replaceState(null, '', '#faq');
        }
    };
    return (
        <footer className="bg-[#FDF8F3] pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="w-2 h-2 bg-black"></div>
                                <div className="w-2 h-2 bg-black"></div>
                                <div className="w-2 h-2 bg-black"></div>
                                <div className="w-2 h-2 bg-transparent"></div>
                            </div>
                            <span className="text-xl font-bold tracking-tight">Paradise World</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6">
                            Elevate your senses with our curated selection of premium perfumes, crafted to perfection for every occasion.
                        </p>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                <Phone size={16} />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                <Mail size={16} />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li>
                                <a href="#" className="hover:text-black">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    Bestsellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-black">
                                    Collections
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">About Us</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li>
                                <Link to={'/about'} className="hover:text-black">
                                    Our Story
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Customer Care</h4>
                        <ul className="space-y-4 text-gray-600 text-sm">
                            <li>
                                <Link
                                    onClick={
                                        (e) => {
                                            e.preventDefault();
                                            smoothScrollTo('faq');
                                        }}
                                    to={'#faq'} className="hover:text-black">
                                    FAQ's
                                </Link>
                            </li>
                            <li>
                                <Link to={'/shipping-returns'} className="hover:text-black">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link to={'#contact-us'} onClick={(e) => {
                                    e.preventDefault()
                                    smoothScrollTo("contact-us")
                                }} className="hover:text-black">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-6">
                            <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                <Facebook size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <Twitter size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <Instagram size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <Youtube size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 Paradise World. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/terms-of-service">Terms of Service</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
