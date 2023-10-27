"use client";
import { ProductProps } from "@/Props/productProps";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/redux/features/cart.slice";

function ProductActionBtns({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  const {items} = useSelector((state: any) => state.cart);
  
  const productInCart = items.find((i: { product : { id: number } }) => i.product.id === product.id);

  return (
    <div className="w-full gap-2 grid grid-cols-2">
      <button onClick={() => productInCart ? dispatch(removeItem(product.id)) : dispatch(addItem(product)) } className="btn btn-outline-primary">{productInCart ? 'Remove' : 'Add to cart'}</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  );
}

export default ProductActionBtns;
