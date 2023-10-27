"use client";

import { ProductProps } from "@/Props/productProps";
import { addItem, removeItem } from "@/redux/features/wishlist.slice";
import { RootState } from "@/redux/store";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

function WishlistBtn({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.wishlist);

  const productInWishlist = items.find(
    (i: { id: number }) => i.id === product.id
  );

  return productInWishlist ? (
    <button onClick={() => dispatch(removeItem(product.id))} className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
      <AiFillHeart className="text-xl fill-red-600" />
    </button>
  ) : (
    <button onClick={() => dispatch(addItem(product))} className="absolute group top-2 right-2 p-2 bg-white rounded-full shadow-md">
      <AiOutlineHeart className="text-xl group-hover:hidden" />
      <AiFillHeart className="text-xl hidden group-hover:block fill-red-600" />
    </button>
  );
}

export default WishlistBtn;
