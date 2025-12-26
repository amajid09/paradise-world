// app/routes/products.tsx
import * as React from 'react';
import {Pagination as HydrogenPagination} from '@shopify/hydrogen';
import type { loader } from '~/routes/shop._index';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router';

// Your custom component (from your snippet)
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10 pt-6">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
      </div>

      <div className="hidden md:-mt-px md:flex">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isCurrent = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                isCurrent
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
              aria-current={isCurrent ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default function ProductsRoute() {
  const {products, currentPage, totalPages} = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <HydrogenPagination connection={products}>
      {({nodes, isLoading, state}) => (
        <>
          {/* Render the products for this page */}
          <ul className="grid gap-4 md:grid-cols-3">
            {nodes.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>

          {/* Use your own pagination UI */}
          {totalPages && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                const params = new URLSearchParams(searchParams);
                params.set('page', String(page));

                // This updates the URL (?page=N), triggering the loader,
                // which re-runs the GraphQL query with correct cursors
                navigate(`?${params.toString()}`, {
                  replace: true,
                  preventScrollReset: true,
                  state,
                });
              }}
            />
          )}
        </>
      )}
    </HydrogenPagination>
  );
}