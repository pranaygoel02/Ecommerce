"use client";

import { CartItemProps, CartState, ProductProps } from "@/Props/productProps";
import { decreaseQuantity, increaseQuantity, removeItem, setQuantity } from "@/redux/features/cart.slice";
import { useDispatch } from "react-redux";
import Rating from "./Rating";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from 'next/link'
import { RiDeleteBinLine } from "react-icons/ri";
import formatToCurreny from "@/utils/formatCurrencyPrice";

function CartItem({ item }: {item: CartItemProps}) {
  const dispatch = useDispatch();

  const {product, quantity} = item;

  return (
    <div className="flex items-center justify-between flex-wrap text-sm md:text-base p-3 lg:p-4 rounded-lg bg-white gap-3 lg:gap-4">
      <img
        className="aspect-square w-10 lg:w-20 h-10 lg:h-20 object-cover rounded-md"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="flex flex-col gap-1 flex-1">
        <Link href={`/product/${product.id}`} className="font-semibold">{product.title}</Link>
        <p className="text-xs text-neutral-600 capitalize">
          {product.brand}
        </p>
        <Rating rating={product.rating} />
      </div>
      <div className="flex flex-col gap-2 flex-wrap">
        <p className="lg:text-xl font-semibold text-right">$ {formatToCurreny(product.price)}</p>
        <div className="p-2 lg:p-4 rounded-md inline-flex items-center gap-3 lg:gap-4 bg-gray-200">
          <button onClick={() => quantity === 1 ? dispatch(removeItem(product.id)) : dispatch(decreaseQuantity(product.id))}>
            {quantity === 1 ? <RiDeleteBinLine/> : <AiOutlineMinus />}
          </button>
          <p className="lg:text-lg font-semibold">{quantity}</p>
          {/* <input type="number" className="text-lg font-semibold cart-quantity__field" defaultValue={quantity} onChange={(e) => dispatch(setQuantity({id :product.id, quantity: +e.target.value}))}/> */}
          <button onClick={() => dispatch(increaseQuantity(product.id))}>
            <AiOutlinePlus />
          </button>
        </div>
        {/* <button
          onClick={() => dispatch(removeItem(product.id))}
          className="btn btn-outline-primary"
        >
          Remove
        </button> */}
      </div>
    </div>
  );
}

export default CartItem;
