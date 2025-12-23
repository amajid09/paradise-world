import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import React from "react";

const TestimonialCard: React.FC = () => <div className="bg-cyan-50/50 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 relative overflow-hidden group hover:bg-cyan-50/70 transition-all duration-300">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 pointer-events-none"></div>

    <div className="relative z-10">
        <Quote className="text-gray-800 mb-6 fill-transparent stroke-[1.5]" size={32} />

        <p className="text-xl md:text-2xl font-light text-gray-900 leading-relaxed mb-8">
            I couldn't be happier with my experience shopping here! The quality of
            the perfume is top-notch, and the customer service was exceptional.
        </p>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Madhu" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Madhu</h4>
                    <p className="text-sm text-gray-600">Product Designer</p>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                    <ArrowLeft size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    </div>
</div>

export default TestimonialCard;