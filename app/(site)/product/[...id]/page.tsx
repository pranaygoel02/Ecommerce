import { SearchProps } from "@/Props/searchProps";
import ProductActionBtns from "@/components/ProductActionBtns";
import ProductImages from "@/components/ProductImages";
import Rating from "@/components/Rating";
import axios from "axios";
import Link from "next/link";

async function page({
  searchParams,
  params: { id, slug },
}: SearchProps & { params: { id: string; slug: string } }) {
  const { data } = await axios.get("https://dummyjson.com/products/" + id);
  console.log(data);

  return (
    <>
      <p className="capitalize text-sm text-neutral-400 mb-4">
        Categories /{" "}
        <Link
          className="text-black font-semibold hover:underline"
          href={"/category/" + data.category}
        >
          {data.category}
        </Link>
      </p>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProductImages images={data?.images} />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          <p className="text-sm">{data?.brand}</p>
          <Rating rating={data?.rating} />
          <p className="text-2xl font-semibold my-4">$ {data?.price.toFixed(2)} {data?.discountPercentage && <span className="text-sm bg-red-700 text-white p-2 py-1 font-semibold">{data?.discountPercentage}% off</span>} </p>
          <h4 className="font-semibold text-lg w-full pb-1 border-b border-neutral-400">About the product</h4>
          <p className="mt-4 text-sm mb-12">{data?.description}</p>
          <ProductActionBtns product={data} />
        </div>
      </section>
    </>
  );
}

export default page;
