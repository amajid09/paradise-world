import React from 'react';
import { BestSellingCarousel, BrandPhilosophy, CategoriesSection, ExquisiteFragrances, FAQSection, FeaturedCollections, LuxuryElegance, Newsletter, PremiumIngredients, ProductCard, TestimonialCard, TestimonialsGrid, TrendingPerfumes, TrustBadge, TrustBanner, } from '~/components/home';
import Footer from '~/components/layout/Footer';
import Navbar from '~/components/layout/Navbar';
import { ArrowUpRight } from 'lucide-react';

export const HomePage: React.FC = () => {
    return <div className="min-h-screen w-full bg-[#F3E8FF] bg-gradient-to-br from-[#F3E8FF] via-[#EBE0FF] to-[#E0D4FC] font-sans text-gray-900 selection:bg-purple-200">
        <div className="w-full relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="px-4 md:px-8 pt-8 pb-16 max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                        {/* Left Column: Hero Text & Testimonial */}
                        <div className="lg:col-span-5 flex flex-col justify-between pt-8 lg:pt-16">
                            <div className="mb-16">
                                <TrustBadge />

                                <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
                                    Discover your best <br />
                                    <span className="font-serif italic font-normal">
                                        Perfume
                                    </span>{' '}
                                    at today
                                </h1>

                                <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                                    Discover premium fashion and accessories curated just for
                                    you. shop the latest trends and timeless classics now.
                                </p>

                                <div className="flex items-center gap-4">
                                    <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group">
                                        Explore Shop
                                    </button>
                                    <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors group">
                                        <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <TestimonialCard />
                            </div>
                        </div>

                        {/* Right Column: Hero Image & Product Cards */}
                        <div className="lg:col-span-7 flex flex-col h-full">
                            {/* Hero Image Area */}
                            <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center mb-8">
                                {/* Main Perfume Bottle */}
                                <div className="relative z-20 w-full h-full flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" alt="Premium Perfume" className="h-full w-auto object-contain drop-shadow-2xl" />

                                    {/* Floating Flowers (Decorative) */}
                                    <img src="https://images.unsplash.com/photo-1490750967868-58cb75063ed4?w=400&h=400&fit=crop&q=80" alt="Flower" className="absolute top-10 left-10 w-32 h-32 object-cover rounded-full mix-blend-multiply opacity-60 blur-[1px] animate-pulse" style={{
                                        animationDuration: '4s'
                                    }} />
                                    <img src="https://images.unsplash.com/photo-1563241527-3004b7be025f?w=400&h=400&fit=crop&q=80" alt="Flower" className="absolute bottom-20 right-10 w-40 h-40 object-cover rounded-full mix-blend-multiply opacity-60 blur-[1px]" />
                                </div>
                            </div>

                            {/* Product Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                                <ProductCard title="Veloura Mist" items="27 items" image="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=500&fit=crop" bgColor="bg-pink-100" />
                                <ProductCard title="Noir Éclat" items="45 items" image="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop" bgColor="bg-green-100" />
                            </div>
                        </div>
                    </div>
                </section>

                <BestSellingCarousel />
                <TrustBanner />
                <CategoriesSection />
                <BrandPhilosophy />
                <ExquisiteFragrances />
                <LuxuryElegance />
                <FeaturedCollections />
                <PremiumIngredients />
                <TrendingPerfumes />
                <TestimonialsGrid />
                <Newsletter />
                <FAQSection />
            </main>

            <Footer />
        </div>
    </div>
}
