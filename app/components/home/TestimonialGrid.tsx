import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import React from "react";

const TestimonialsGrid: React.FC = () => <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
    <div className="flex justify-between items-end mb-12">
        <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-2">
                LOVED BY THOUSANDS WORLDWIDE
            </h2>
            <p className="text-gray-600">
                See what our customers say about their favorite fragrances
            </p>
        </div>
        <div className="flex gap-2">
            <button className="p-3 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                <ArrowLeft size={20} />
            </button>
            <button className="p-3 rounded-full border border-gray-300 hover:bg-black hover:text-white transition-colors">
                <ArrowRight size={20} />
            </button>
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map(item => <div key={item} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <Quote className="text-amber-400 mb-4 fill-current" size={32} />
            <p className="text-gray-800 mb-6 font-medium leading-relaxed">
                "Veloure Essence is my new signature scent! It's luxurious,
                long-lasting, and I always get compliments. The packaging is
                absolutely stunning as well."
            </p>
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=100&fit=crop`} alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-sm">Jonatan Albert</h4>
                    <p className="text-xs text-gray-500">ASN</p>
                </div>
            </div>
        </div>)}
    </div>
</section>;
export default TestimonialsGrid;