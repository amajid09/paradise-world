import React from "react";

const TrustBadge: React.FC = () => <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full w-fit border border-white/60 mb-8">
    <div className="flex -space-x-2">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
    </div>
    <span className="text-xs font-medium pr-2">
        Plus{' '}
        <span className="bg-black text-white px-1.5 py-0.5 rounded-full text-[10px]">
            25k
        </span>{' '}
        Trusted users!
    </span>
</div>;

export default TrustBadge;