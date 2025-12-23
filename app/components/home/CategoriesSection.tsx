import { ArrowUpRight } from "lucide-react";

const CategoriesSection: React.FC = () => <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
    <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?w=800&fit=crop" alt="Categories" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <h2 className="absolute bottom-8 left-8 text-4xl font-serif text-white">
                    CATEGORIES
                </h2>
            </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
            {[{
                title: "MEN'S FRAGRANCES",
                sub: "Best Men's Collection"
            }, {
                title: "WOMEN'S FRAGRANCES",
                sub: "Best Women's Collection"
            }, {
                title: 'UNISEX SCENTS',
                sub: 'Special Scents'
            }, {
                title: 'LUXURY COLLECTION',
                sub: 'Luxury Scent for Both'
            }].map((cat, idx) => <div key={idx} className="group cursor-pointer border-b border-gray-200 pb-6 hover:border-black transition-colors">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-serif text-gray-900 group-hover:text-amber-700 transition-colors">
                        {cat.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
                <p className="text-gray-500 italic">{cat.sub}</p>
            </div>)}
        </div>
    </div>
</section>;

export default CategoriesSection;