import { CartItemProps, CartState } from "@/Props/productProps";
import Title from "./Title";
import formatToCurreny from "@/utils/formatCurrencyPrice";
import CheckoutBtn from "./CheckoutBtn";

export default function OrderSummary({ items } : {items: CartItemProps[] | undefined | null}) {
  return (
    <div className="flex flex-col gap-4 col-span-3 lg:col-span-2">
      <Title title="Order Summary" />
      <table className="w-full">
        <thead>
          <tr>
            <th>Item</th>
            {/* <th className="text-right">Price</th> */}
            {/* <th>Qty.</th> */}
            <th className="text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items && items?.map((item : CartItemProps) => (
            <tr key={item.product.id}>
              <td className="">{item.product.title}</td>
              {/* <td className=" text-right">$ {item.product.price}</td> */}
              {/* <td className="">x {item.quantity}</td> */}
              <td className=" text-right">
                $ {formatToCurreny(item.product.price * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center gap-4">
        <p className="text-gray-500">Total</p>
        <p className="text-right font-semibold text-xl">
          ${" "}
          {items && formatToCurreny(
            items.reduce(
              (acc, item) => acc + item.product.price * item.quantity,
              0
            )
          )}
        </p>
      </div>
      <CheckoutBtn />
    </div>
  );
}
