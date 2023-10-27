"use client";
import { RootState } from "@/redux/store";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NavTooltip from "./NavTooltip";

function CartIcon() {

  return (
    <NavTooltip
      icon={<FaOpencart className="text-lg" />}
      name="Cart"
      link="/cart"
      num={useSelector((state: RootState) => state.cart).items.length}
    />
  );
}

export default CartIcon;
