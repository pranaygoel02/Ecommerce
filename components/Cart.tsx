"use client";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { RootState } from "@/redux/store";
import Title from "@/components/Title";
import EmptyCart from "@/components/EmptyCart";
import OrderSummary from "@/components/OrderSummary";
import Container from "@/components/Container";

function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    return   <EmptyCart text="cart" />
  }

  return (
    <>
      <Title title="Shopping Cart" />
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <ul className="flex flex-col gap-2 lg:gap-4 col-span-3">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </ul>
        <Container className="col-span-3 lg:col-span-2">
          <OrderSummary items={items} />
        </Container>
      </section>
    </>
  );
}

export default Cart;
