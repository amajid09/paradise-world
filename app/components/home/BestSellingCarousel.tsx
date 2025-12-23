import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import React from "react";

const BestSellingCarousel:React.FC = () => {
  const products = [{
    name: 'Premium Men Scent',
    price: '$89.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523293188086-b52084219c03?w=300&h=300&fit=crop'
  }, {
    name: 'Ocean Breeze',
    price: '$79.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop'
  }, {
    name: 'Woody Essence',
    price: '$95.00',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop'
  }, {
    name: 'Citrus Splash',
    price: '$65.00',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop'
  }, {
    name: 'Midnight Noir',
    price: '$110.00',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=300&fit=crop'
  }];
  return <section className="py-12 px-4 md:px-8">
      <div className="flex items-center justify-between mb-8 max-w-[1440px] mx-auto">
        <h3 className="text-xl font-bold">Best Selling Product</h3>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowLeft size={16} />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide max-w-[1440px] mx-auto">
        {products.map((product, idx) => <div key={idx} className="min-w-[280px] bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <h4 className="font-semibold text-gray-900">{product.name}</h4>
            <div className="flex items-center gap-1 my-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />)}
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating})
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="font-bold text-lg">{product.price}</span>
              <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>)}
      </div>
    </section>;
};

export default BestSellingCarousel;