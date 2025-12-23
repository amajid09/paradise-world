import { ArrowUpRight } from "lucide-react";
import React from "react";
type ProductCardProps = {
    title: string;
    items: string;
    image: string;
    bgColor?: string;
};
const ProductCard: React.FC<ProductCardProps> = ({
    title,
    items,
    image,
    bgColor = 'bg-pink-50'
}) => <div className="bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 group">
        <div className={`aspect-square ${bgColor} rounded-[1.5rem] mb-4 overflow-hidden relative`}>
            <img src={image} alt={title} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="px-2 pb-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mb-4">({items})</p>
            <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded-full border border-gray-900 text-xs font-medium hover:bg-gray-900 hover:text-white transition-colors">
                    Explore Shop
                </button>
                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <ArrowUpRight size={14} />
                </button>
            </div>
        </div>
    </div>

export default ProductCard;