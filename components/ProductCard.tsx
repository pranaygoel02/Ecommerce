import Link from "next/link";
import Rating from "./Rating";
import ProductActionBtns from "./ProductActionBtns";
import { ProductProps } from "@/Props/productProps";
import WishlistBtn from "./WishlistBtn";

function ProductCard(data: ProductProps) {
  const { title, thumbnail, id, price, category, rating, brand } = data;

  return (
    <div key={id}>
      <div className="relative">
        <img
          className="aspect-square object-cover rounded-xl"
          src={thumbnail}
        />
        <WishlistBtn product={data}/>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="inline-flex items-start justify-between w-full">
          <h3 className="font-semibold text-lg">
            <Link href={"/product/" + id}>{title}</Link>
          </h3>
          <p className="font-semibold text-lg">$ {price.toFixed(2)}</p>
        </div>
        <p className="text-sm capitalize">
          {category}, {brand}
        </p>
        <Rating rating={rating} />
        <ProductActionBtns product={data} />
      </div>
    </div>
  );
}

export default ProductCard;
