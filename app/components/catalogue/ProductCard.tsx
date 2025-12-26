import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import Product from '~/routes/products.$handle';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import { Image } from '@shopify/hydrogen';
import type { Image as StoreFrontImage, Maybe } from '@shopify/hydrogen/storefront-api-types';
type ProductImageProps = {
  image: ImageType;
  name: string;
  loading?: 'lazy' | 'eager';
}
export interface ProductCardType {
  id: string;
  name: string;
  brand: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  scent: string;
}
export type Product =
  | ProductItemFragment
  | CollectionItemFragment
  | RecommendedProductFragment;

interface ProductCardProps {
  product: Product;
  loading?: 'lazy' | 'eager';
}
type ImageType = Maybe<Pick<StoreFrontImage, "id" | "altText" | "url" | "width" | "height">> | undefined;

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  loading

}) => {
  const { priceRange, title, featuredImage, tags } = product
  return <div className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
    <ProductImage image={featuredImage} name={title} loading={loading} />
    <div className="p-4 flex flex-col flex-1">
      <ProductBrandAndName brand={title} name={title} />
      <ProductRating rating={4} reviews={100} />
      <PriceScentTag price={priceRange.minVariantPrice.amount} scent={tags[1]} />
    </div>
  </div>
}

const ProductImage: React.FC<ProductImageProps> = ({
  image,
  name,
  loading
}) => {
  if (!image) return null;
  return <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 relative">
    <Image data={image} aspectRatio='1/1' loading={loading} alt={name} className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 45em) 400px, 100vw" />
    {/* Quick Add Button - Visible on Hover (Desktop) / Always (Mobile) */}
    <button className="absolute bottom-4 right-4 bg-white p-2.5 rounded-full shadow-lg text-gray-900 hover:bg-black hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 focus:opacity-100 focus:translate-y-0" aria-label="Add to cart">
      <ShoppingCart className="h-5 w-5" />
    </button>
  </div>
}


const ProductBrandAndName: React.FC<Pick<ProductCardType, 'brand' | 'name'>> = ({
  brand,
  name
}) =>
  <>
    <p className="text-xs text-gray-500 mb-1 font-medium tracking-wide uppercase">
      {brand}
    </p>
    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
      <a href="#">
        <span aria-hidden="true" className="absolute inset-0" />
        {name}
      </a>
    </h3>
  </>


const PriceScentTag: React.FC<Pick<ProductCardType, 'price' | 'scent'>> = ({
  price,
  scent
}) =>
  <div className="mt-auto flex items-center justify-between">
    <span className="text-lg font-bold text-gray-900">
      R{price}
    </span>
    {scent &&
      <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        {scent}
      </span>
    }
  </div>

const ProductRating: React.FC<Pick<ProductCardType, 'rating' | 'reviews'>> = ({
  rating,
  reviews
}) =>
  <div className="flex items-center mb-3">
    <div className="flex items-center text-yellow-400">
      {[...Array(5)].map((_, i) => <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} />)}
    </div>
    <span className="text-xs text-gray-500 ml-2">
      ({reviews})
    </span>
  </div>

export default ProductCard;