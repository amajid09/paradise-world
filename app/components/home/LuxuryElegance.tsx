import { Leaf, ShieldCheck, Star } from "lucide-react";
import React from "react";

const LuxuryElegance: React.FC = () => <section className="py-16 px-4 md:px-8 max-w-[1440px] mx-auto bg-[#FDF8F3] rounded-[3rem] my-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="pl-8">
            <h2 className="text-4xl font-serif mb-8">
                EXPERIENCE LUXURY & ELEGANCE
            </h2>
            <p className="text-gray-600 mb-12">
                Our fragrances are crafted to elevate your senses and leave a lasting
                impression.
            </p>

            <div className="space-y-8">
                {[{
                    icon: Leaf,
                    title: 'Long-Lasting Fragrance',
                    desc: 'Enjoy all-day freshness with premium essential oils.'
                }, {
                    icon: Star,
                    title: 'Finest Natural Ingredients',
                    desc: 'Crafted with rare and high-quality extracts.'
                }, {
                    icon: ShieldCheck,
                    title: 'Sustainable & Ethical',
                    desc: 'Eco-friendly packaging and responsibly sourced materials.'
                }].map((item, idx) => <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                        <item.icon size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1 text-orange-800">
                            {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                </div>)}
            </div>
        </div>
        <div className="relative h-[600px] rounded-[2rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1595120664973-1940d216593a?w=800&fit=crop" alt="Luxury" className="w-full h-full object-cover" />
        </div>
    </div>
</section>;
export default LuxuryElegance;
