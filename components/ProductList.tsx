import React from 'react'
import ProductCard from './ProductCard';
import Link from 'next/link';
import ProductGrid from './ProductGrid';

function getPages({ page, pages }: any) {
    const start1 = Math.max(1,page-3)
    const end1 = Math.min(pages,page + 3)
    console.log({start1,end1});
    const ar = Array.from({length: end1 - start1 + 1}).map((_,i) => start1 + i)
    console.log(ar);
    return ar
  }

async function ProductList({searchParams,params,data, LIMIT} : {searchParams: any,params: any,data: any, LIMIT: any}) {

    const page = parseInt(searchParams.page as string) || 1;

    const { products, total, skip, limit } = data;
    
    const pages = Math.ceil(total / LIMIT);
      
    return (
      <section className='flex flex-col gap-16 items-center'>
        <ProductGrid products={products} />
        <div className='inline-flex text-center items-center gap-2'>
          <Link aria-disabled={page === 1} href={`/?page=${Math.max(1,page - 1)}`}>Previous</Link>
          {
            getPages({page,pages}).map((i) => (
              <Link className={`aspect-square p-2 w-8 h-8 flex items-center justify-center outline outline-1 rounded-full ${i === page && 'bg-black text-white'}`} href={`/?page=${i}`}>{i}</Link>
            ))
          }
          <Link aria-disabled={page === pages} href={`?page=${Math.min(page + 1,pages)}`}>Next</Link>
        </div>
      </section>
    );
  
}

export default ProductList