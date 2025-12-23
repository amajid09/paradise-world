import React from "react";

const SectionHeading: React.FC<{
    title: string;
    subtitle?: string;
    light?: boolean;
}> = ({
    title,
    subtitle,
    light = false
}) => <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h2>
            {subtitle && <p className={`text-lg ${light ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
            </p>}
        </div>;

export default SectionHeading;