
import { getPaginationVariables } from '@shopify/hydrogen';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import type { CollectionItemFragment } from 'storefrontapi.generated';
import { CatalogueHeader, FilterSidebar } from '~/components/catalogue';
import ProductCard, { type Product } from '~/components/catalogue/ProductCard';
import { PaginatedResourceSection } from '~/components/PaginatedResourceSection';
import type { Route } from '../routes/+types/shop._index';
import { filterTagsby } from '~/lib/util';
// Simple Header Component for the page context
export const meta: Route.MetaFunction = () => {
  return [{ title: `Hydrogen | Products` }];
};

export async function loader(args: Route.LoaderArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return { ...deferredData, ...criticalData };
}
/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({ context, request }: Route.LoaderArgs) {
  const { storefront  } = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });
  const [{ products, totalPages }] = await Promise.all([
    storefront.query(CATALOG_QUERY, {
      variables: { ...paginationVariables },
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);
  console.log('total pages', totalPages)
  const scentCategories = [
    'floral', 'woody', 'fresh', 'oriental',
    'citrus', 'gourmand', 'fruity', 'aquatic', 'leather'
  ];
  const brandTags = [
    'Lattafa Perfumes',
    'Ard Al Zafran Perfumes',
    'Rave Perfumes',
    'Armaaf Perfumes',
    'Afnan Perfumes',
    'Fragrance World Perfumes',
    'La Chameau Perfumes',
    'Maison Alhambra Perfumes'
  ];
  const productTypeTags = [
    'Eau de Cologne',
    'Perfume Oil'
  ];
  const genderTags = [
    'Men',
    'Women'
  ]

  const scentTypeOptions = filterTagsby(products.nodes, scentCategories);
  const brandOption = filterTagsby(products.nodes, brandTags);
  const productTypeOption = filterTagsby(products.nodes, productTypeTags);
  const genderOption = filterTagsby(products.nodes, genderTags);


  return { products, scentTypeOptions, brandOption, productTypeOption, genderOption };
}
/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({ context }: Route.LoaderArgs) {
  return {};
}
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button type="button" className="-ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">
              Essence
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            New Arrivals
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Women
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Men
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Gifts
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-indigo-600">
            Sale
          </a>
        </nav>

        {/* Icons */}
        <div className="flex flex-1 items-center justify-end gap-x-4 lg:gap-x-6">
          <div className="flex items-center gap-x-4">
            <button className="p-1.5 text-gray-400 hover:text-gray-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-500">
              <User className="h-5 w-5" />
            </button>
            <button className="group -m-2 flex items-center p-2">
              <ShoppingBag className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && <div className="lg:hidden border-t border-gray-200">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
          New Arrivals
        </a>
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
          Women
        </a>
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
          Men
        </a>
        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
          Gifts
        </a>
      </div>
    </div>}
  </header>;
}

const CataloguePage: React.FC = () => {
  const { products, scentTypeOptions, brandOption, productTypeOption, genderOption } = useLoaderData<typeof loader>();
  return <div className="min-h-screen bg-white">
    <Header />

    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <CatalogueHeader />

      <div className="flex gap-x-8 pb-24 pt-6">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar scents={scentTypeOptions} brands={brandOption} productTypeOption={productTypeOption} genderOption={genderOption} />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Dialog Trigger (Simplified) */}
          <div className="lg:hidden mb-6">
            <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Filters
            </button>
          </div>
          <PaginatedResourceSection<CollectionItemFragment>
            connection={products}
            resourcesClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {({ node: product, index }) => (
              <ProductCard
                key={product.id}
                product={product}
                loading={index < 8 ? 'eager' : undefined}
              />
            )}
          </PaginatedResourceSection>
          {/* <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} /> */}
        </div>
      </div>
    </main>
  </div>
}

const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    tags
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/product
const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...CollectionItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${COLLECTION_ITEM_FRAGMENT}
` as const;

export default CataloguePage;