import React from 'react';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import ProductCard from './ProductCard';
// Mock data for the grid
const PRODUCTS: Product[] = [{
  id: '1',
  name: 'Midnight Jasmine & Oud',
  brand: 'Lumière',
  price: 125.0,
  rating: 4.8,
  reviews: 124,
  image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
  scent: 'Oriental'
}, {
  id: '2',
  name: 'Bergamot Breeze',
  brand: 'Coastal Scents',
  price: 85.0,
  rating: 4.5,
  reviews: 89,
  image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
  scent: 'Citrus'
}, {
  id: '3',
  name: 'Rose Absolute',
  brand: 'Maison Fleur',
  price: 145.0,
  rating: 4.9,
  reviews: 215,
  image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
  scent: 'Floral'
}, {
  id: '4',
  name: 'Sandalwood Mist',
  brand: 'Earth & Wood',
  price: 95.0,
  rating: 4.6,
  reviews: 76,
  image: 'https://images.unsplash.com/photo-1585386959984-a4155224ac27?auto=format&fit=crop&q=80&w=800',
  scent: 'Woody'
}, {
  id: '5',
  name: 'Oceanic Drift',
  brand: 'Azure',
  price: 78.0,
  rating: 4.3,
  reviews: 45,
  image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=800',
  scent: 'Fresh'
}, {
  id: '6',
  name: 'Vanilla Noir',
  brand: 'Lumière',
  price: 110.0,
  rating: 4.7,
  reviews: 156,
  image: 'https://images.unsplash.com/photo-1615160733215-66436d793e69?auto=format&fit=crop&q=80&w=800',
  scent: 'Oriental'
}, {
  id: '7',
  name: 'Wild Peony',
  brand: 'Maison Fleur',
  price: 135.0,
  rating: 4.8,
  reviews: 92,
  image: 'https://images.unsplash.com/photo-1595535373192-fc04375618f4?auto=format&fit=crop&q=80&w=800',
  scent: 'Floral'
}, {
  id: '8',
  name: 'Cedar & Spice',
  brand: 'Earth & Wood',
  price: 88.0,
  rating: 4.4,
  reviews: 63,
  image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
  scent: 'Woody'
}, {
  id: '9',
  name: 'Lavender Fields',
  brand: 'Provencal',
  price: 65.0,
  rating: 4.5,
  reviews: 112,
  image: 'https://images.unsplash.com/photo-1590156206657-b16ce4213381?auto=format&fit=crop&q=80&w=800',
  scent: 'Floral'
}, {
  id: '10',
  name: 'Amber Gold',
  brand: 'Luxe',
  price: 185.0,
  rating: 5.0,
  reviews: 34,
  image: 'https://images.unsplash.com/photo-1616995241927-9488b394024d?auto=format&fit=crop&q=80&w=800',
  scent: 'Oriental'
}, {
  id: '11',
  name: 'Citrus Splash',
  brand: 'Fresh Co',
  price: 55.0,
  rating: 4.2,
  reviews: 28,
  image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800',
  scent: 'Citrus'
}, {
  id: '12',
  name: 'White Musk',
  brand: 'Pure',
  price: 92.0,
  rating: 4.6,
  reviews: 178,
  image: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=800',
  scent: 'Fresh'
}];
type Product =
  | ProductItemFragment
  | CollectionItemFragment
  | RecommendedProductFragment;
export type ImageLoading = 'eager' | 'lazy';
type ProductItemProps = {
  product: Product;
  loading?: ImageLoading;
}
const ProductGrid: React.FC<ProductItemProps> = ({ product, loading }) => {
  return 
}
export default ProductGrid;