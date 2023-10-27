import React, { Suspense } from 'react'
import ProductCard from './ProductCard'
import { ProductProps } from '@/Props/productProps'

async function ProductGrid({ products } : {products: ProductProps[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product: any) => (
            <Suspense fallback={<div className='w-[320px] aspect-square rounded-lg bg-gray-300 animate-pulse'></div>}>
              <ProductCard {...product} key={product.id} />
            </Suspense>
          ))}
        </div>
  )
}

export default ProductGrid