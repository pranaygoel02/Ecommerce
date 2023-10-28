import { SearchProps } from "@/Props/searchProps";
import ProductList from "@/components/ProductList";
import axios from "axios";
import { LIMIT } from "@/utils/constants";
import generateTitle from "@/utils/generateTitle";

async function page({ searchParams, params }: SearchProps) {
  const { slug } = params;

  const { data } = await axios.get(
    "https://dummyjson.com/products/category/" + slug
  );
  

  return ( 
    <>
      <h1 className="text-2xl font-semibold leading-10 lg:leading-normal italic text-center text-slate-900 mb-8">
        Top deals on{" "}
        <span id="category-text" className="before:absolute before:-inset-1 text-white before:z-[-1] before:-skew-y-3 before:bg-pink-500 relative inline-block">
          {generateTitle(slug[0])}
          </span>
        {" "}is here.
      </h1>
      <ProductList {...{ searchParams, params, data, LIMIT }} />;
    </>
  );
}

export default page;
