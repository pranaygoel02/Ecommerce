"use client";
import { RootState } from "@/redux/store";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import NavTooltip from "./NavTooltip";

function WishlistIcon() {

  return (
    <NavTooltip
      icon={<AiOutlineHeart className="text-lg" />}
      name="Wishlist"
      link="/wishlist"
      num={useSelector((state: RootState) => state.wishlist).items.length}
    />
  );
}

export default WishlistIcon;
