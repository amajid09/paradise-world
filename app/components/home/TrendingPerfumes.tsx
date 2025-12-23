import React from "react";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const TrendingPerfumes: React.FC = () => <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto bg-amber-50/50 rounded-[3rem]">
    <SectionHeading title="BEST SELLERS & TRENDING PERFUMES" subtitle="Discover the most-loved fragrances" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, idx) => <div key={idx} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                <img src={`https://images.unsplash.com/photo-${1600000000000 + idx}?w=150&fit=crop`} alt="Perfume" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="flex-1">
                <h4 className="font-bold text-gray-900">Premium Men Scent</h4>
                <p className="text-xs text-gray-500 mb-2">Oud, Bergamot, Amber</p>
                <span className="text-amber-600 font-bold">$50.00</span>
            </div>
            <button className="w-10 h-10 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors flex items-center justify-center">
                <ArrowUpRight size={18} />
            </button>
        </div>)}
    </div>
    <div className="text-center mt-12">
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            View All <ArrowUpRight size={18} />
        </button>
    </div>
</section>

export default TrendingPerfumes;

