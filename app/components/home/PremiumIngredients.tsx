import { ArrowUpRight } from "lucide-react";
import React from "react";

const PremiumIngredients: React.FC = () => <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#FDF8F3] rounded-[3rem] p-8 md:p-12">
        <div className="rounded-[2rem] overflow-hidden h-[500px]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&fit=crop" alt="Ingredients" className="w-full h-full object-cover" />
        </div>
        <div>
            <h2 className="text-4xl font-serif mb-6">
                PREMIUM INGREDIENTS THE ESSENCE OF LUXURY
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Our perfumes are crafted with natural, high-quality ingredients for a
                rich and lasting scent. A perfect blend of floral, woody, citrus, and
                warm notes creates elegance and depth. Cruelty-free and free from
                harsh chemicals.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                Learn More <ArrowUpRight size={18} />
            </button>
        </div>
    </div>
</section>;

export default PremiumIngredients;