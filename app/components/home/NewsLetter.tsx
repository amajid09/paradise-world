import React from "react";

const Newsletter: React.FC = () => <section className="bg-gray-900 text-white py-24 px-4">
    <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
            STAY UPDATED WITH OUR NEWSLETTER
        </h2>
        <p className="text-gray-400 mb-8">
            Be the first to know about exclusive offers, new arrivals, and special
            deals!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <input type="email" placeholder="Enter your email address" className="flex-1 bg-transparent border-none text-white placeholder-gray-400 px-6 py-3 focus:outline-none focus:ring-0" />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                Subscribe
            </button>
        </div>
    </div>
</section>

export default Newsletter;