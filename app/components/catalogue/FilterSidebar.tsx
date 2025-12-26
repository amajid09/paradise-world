import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
interface FilterSectionProps {
  title: string;
  options: {
    label: string;
    count: number;
    value: string;
  }[];
  defaultOpen?: boolean;
}
const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  defaultOpen = true
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <div className="border-b border-gray-200 py-6">
    <h3 className="-my-3 flow-root">
      <button type="button" className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-900">{title}</span>
        <span className="ml-6 flex items-center">
          {isOpen ? <ChevronUp className="h-5 w-5" aria-hidden="true" /> : <ChevronDown className="h-5 w-5" aria-hidden="true" />}
        </span>
      </button>
    </h3>
    {isOpen && <div className="pt-6">
      <div className="space-y-4">
        {options.map(option => <div key={option.value} className="flex items-center">
          <input id={`filter-${title}-${option.value}`} name={`${title}[]`} defaultValue={option.value} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" />
          <label htmlFor={`filter-${title}-${option.value}`} className="ml-3 text-sm text-gray-600 flex-1">
            {option.label}
          </label>
          <span className="text-xs text-gray-400">({option.count})</span>
        </div>)}
      </div>
    </div>}
  </div>;
}
type Option = {
  label: string;
  count: number;
  value: string;
};
type FilterSidebarProps = {
  scents: Option[];
  brands: Option[];
  productTypeOption: Option[];
  genderOption: Option[];
};
const FilterSidebar: React.FC<FilterSidebarProps> = ({ scents, brands, productTypeOption, genderOption }) => {
  return <form className="hidden lg:block">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-bold text-gray-900">Filters</h2>
      <Filter className="h-4 w-4 text-gray-500" />
    </div>

    <FilterSection title="Category" options={brands || []} />
    <FilterSection title="Scent Type" options={scents || []} />
    <FilterSection title="Perfume Type" options={productTypeOption || []} />
    <FilterSection title="Gender" options={genderOption || []} />

    {/* <FilterSection title="Price" options={[{
      label: 'Under $50',
      count: 12,
      value: '0-50'
    }, {
      label: '$50 - $100',
      count: 28,
      value: '50-100'
    }, {
      label: '$100 - $200',
      count: 16,
      value: '100-200'
    }, {
      label: 'Over $200',
      count: 8,
      value: '200+'
    }]} defaultOpen={false} /> */}
  </form>;
}
export default FilterSidebar;