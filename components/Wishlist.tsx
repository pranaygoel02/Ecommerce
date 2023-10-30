"use client"
import EmptyCart from "@/components/EmptyCart"
import ProductGrid from "@/components/ProductGrid"
import Title from "@/components/Title"
import { useSelector } from "react-redux"

function Wishlist() {
  
    const { items } = useSelector((state: any) => state.wishlist);

    if(items.length === 0) return <EmptyCart text={"wishlist"}/>

    return (
    <>
      <Title title="Your Wishlist" />
      <ProductGrid products={items} />
    </>
  )
}

export default Wishlist