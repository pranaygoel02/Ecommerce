"use client"
import EmptyCart from "@/components/EmptyCart"
import ProductGrid from "@/components/ProductGrid"
import ProductList from "@/components/ProductList"
import Title from "@/components/Title"
import { useSelector } from "react-redux"

function Wishlist() {
  
    const { items } = useSelector((state: any) => state.wishlist);

    return (
    <>
      <Title title="Your Wishlist" />
      {items.length > 0 ? (
        <ProductGrid products={items} />
      ) : (
        <EmptyCart text={"wishlist"}/>
      )}
    </>
  )
}

export default Wishlist