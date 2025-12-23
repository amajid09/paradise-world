import { ArrowUpRight } from "lucide-react";

const BrandPhilosophy: React.FC = () => <section className="bg-gray-900 text-white py-24 px-4 text-center">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            AT AMBERA, WE BELIEVE FRAGRANCE IS MORE THAN JUST A SCENT—IT'S AN
            EXPERIENCE.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Our perfumes are crafted with the finest ingredients, blending tradition
            and modern artistry to create unforgettable fragrances that tell your
            unique story.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 mx-auto">
            Learn More <ArrowUpRight size={18} />
        </button>
    </div>
</section>;

export default BrandPhilosophy;