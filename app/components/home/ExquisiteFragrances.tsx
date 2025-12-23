import { Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ExquisiteFragrances: React.FC = () => {
    const filters = ['All', 'Woody', 'Floral', 'Citrus', 'Oriental', 'Leather', 'Florals'];
    const products = [{
        name: 'Noir Mystique',
        notes: 'Oud, Bergamot, Amber',
        price: '$120.00',
        color: 'bg-blue-100',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&fit=crop'
    }, {
        name: 'Rose Elixir',
        notes: 'Rose, Vanilla, Musk',
        price: '$120.00',
        color: 'bg-purple-100',
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&fit=crop'
    }, {
        name: 'Golden Amber',
        notes: 'Amber, Sandalwood',
        price: '$120.00',
        color: 'bg-orange-100',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&fit=crop'
    }];
    return <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <SectionHeading title="INDULGE IN EXQUISITE FRAGRANCES" subtitle="Discover our signature scents crafted with elegance" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter, idx) => <button key={idx} className={`px-6 py-2 rounded-full border ${idx === 0 ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}>
                {filter}
            </button>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => <div key={idx} className="group">
                <div className={`${product.color} rounded-[2rem] p-8 aspect-[4/5] relative mb-4 overflow-hidden`}>
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                        <Heart size={20} />
                    </div>
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        HOT
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-bold">{product.price}</span>
                        <button className="bg-black text-white px-4 py-2 rounded-full text-xs">
                            Buy Now
                        </button>
                    </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.notes}</p>
            </div>)}
        </div>
    </section>;
};
export default ExquisiteFragrances;