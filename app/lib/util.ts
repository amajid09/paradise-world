import type { Product } from "~/components/catalogue/ProductCard";
type ProductType = Product & { tags: string[] };

const filterTagsby = (products: ProductType[], categories: string[]) => {

    const tagCounts: Record<string, number> = {};
    products?.forEach((product: ProductType) => {
        product.tags?.forEach((tag) => {
            const normalizedTag = tag.toLowerCase();
            tagCounts[normalizedTag] = (tagCounts[normalizedTag] || 0) + 1;
        });
    });
    const categoryOption = categories
        ?.filter(category => tagCounts[category.toLowerCase()] > 0) // Only include tags that exist
        ?.map(category => ({
            label: category.charAt(0).toUpperCase() + category.slice(1),
            count: tagCounts[category.toLowerCase()],
            value: category,
        }))
        ?.sort((a, b) => b.count - a.count) ?? [];
    console.log('category options', JSON.stringify(categoryOption));
    return categoryOption;
};
export { filterTagsby };