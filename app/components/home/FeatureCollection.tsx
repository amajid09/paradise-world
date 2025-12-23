import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import React from "react";

const FeaturedCollections:React.FC = () => <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
    <SectionHeading title="DISCOVER FEATURED COLLECTIONS" subtitle="From timeless classics to limited editions" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Men's Collection", "Women's Collection", 'Luxury Collection'].map((col, idx) => <div key={idx} className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
            <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1590000000000 + idx}?w=200&fit=crop`} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1590000000100 + idx}?w=200&fit=crop`} className="w-full h-full object-cover" alt="" />
                </div>
            </div>
            <div className="flex justify-between items-center px-2">
                <div>
                    <h3 className="font-bold text-lg">{col}</h3>
                    <p className="text-xs text-gray-500">120+ Products</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </div>)}
    </div>
</section>;

export default FeaturedCollections;