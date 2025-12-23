import React from "react"

const TrustBanner:React.FC = () => <div className="bg-gray-900 text-white py-4 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
        {[...Array(4)].map((_, i) => <span key={i} className="mx-8 text-sm font-medium tracking-widest">
            24/7 SUPPORT • BEST RETURN POLICY • LONG-LASTING FRAGRANCE • FASTEST
            DELIVERY
        </span>)}
    </div>
</div>;

export default TrustBanner;
