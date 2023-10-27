import axios from "axios";
import ProductList from "@/components/ProductList";
import {LIMIT} from '@/utils/constants'
import { SearchProps } from "@/Props/searchProps";
import Title from "@/components/Title";
import { Suspense } from "react";

async function page({ params, searchParams }: SearchProps) {

  const page = parseInt(searchParams.page as string) || 1;

  const { data } = await axios.get(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${
      LIMIT * (page - 1)
    }&select=id,title,price,category,thumbnail,rating,discountPercentage,brand`
  );
  
  return (
    <>
      <Title title="Top deals for you!" />
      <ProductList {...{searchParams,params,data,LIMIT}} />
    </>
  );
}

export default page;
