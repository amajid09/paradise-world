import React from 'react';
import { ChevronDown, Grid, List } from 'lucide-react';
const CatalogueHeader: React.FC = () => {
  return <div className="flex flex-col border-b border-gray-200 pb-6 mb-8">
    <BreadCrumbs >
    </BreadCrumbs>
  </div >
}

const BreadCrumbs: React.FC = () =>
  <>
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <span className="text-gray-300">/</span>
        </li>
        <li>
          <span className="text-sm font-medium text-gray-900" aria-current="page">
            Fragrances
          </span>
        </li>
      </ol>
    </nav>

    <div className="flex items-baseline justify-between">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Fine Fragrances
      </h1>

      <HeaderControls />
    </div>
  </>

const DropdownMenu: React.FC = () => <div className="hidden group-hover:block absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
  <div className="py-1">
    <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm hover:bg-gray-50">
      Most Popular
    </a>
    <a href="#" className="text-gray-500 block px-4 py-2 text-sm hover:bg-gray-50">
      Best Rating
    </a>
    <a href="#" className="text-gray-500 block px-4 py-2 text-sm hover:bg-gray-50">
      Newest
    </a>
    <a href="#" className="text-gray-500 block px-4 py-2 text-sm hover:bg-gray-50">
      Price: Low to High
    </a>
    <a href="#" className="text-gray-500 block px-4 py-2 text-sm hover:bg-gray-50">
      Price: High to Low
    </a>
  </div>
</div>

const SortDropdown: React.FC = () => <div className="relative inline-block text-left">
  <div className="group relative">
    <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
      Sort by
      <ChevronDown className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
    </button>
    <DropdownMenu />
  </div>
</div>

const HeaderControls: React.FC = () => <div className="flex items-center">
  <SortDropdown />
  <ButtonsGroup />
</div>

const ButtonsGroup: React.FC = () => <div className="ml-4 hidden sm:flex items-center space-x-2 border-l border-gray-200 pl-4">
  <button type="button" className="p-2 text-gray-400 hover:text-gray-500">
    <span className="sr-only">View grid</span>
    <Grid className="h-5 w-5 text-black" aria-hidden="true" />
  </button>
  <button type="button" className="p-2 text-gray-400 hover:text-gray-500">
    <span className="sr-only">View list</span>
    <List className="h-5 w-5" aria-hidden="true" />
  </button>
</div>

export default CatalogueHeader;