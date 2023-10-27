"use client";
import axios from "axios";
import React, { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuery,
  hideSearch,
  showSearch,
} from "@/redux/features/search.slice";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { BsArrowUpLeft } from "react-icons/bs";

function Search() {
  const dispatch = useDispatch();
  const { show, queries } = useSelector((state: RootState) => state.search);

  const [products, setProducts] = useState([]);

  async function searchProducts(query: string) {
    if (!query) {
      return [];
    }

    const { data } = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return data;
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = await searchProducts(e.target.value);
    console.log(data);
    setProducts(data.products);
    if (e.target.value) dispatch(addQuery(e.target.value));
  };

  function useDebounce(fnc: any, delay: number) {
    let timer: string | number | NodeJS.Timeout | undefined;
    return function (this: any) {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fnc.apply(this, args);
      }, delay);
    };
  }

  const searchProductsDebounce = useMemo(() => {
    return useDebounce(handleChange, 300);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLFormElement>) => {
    const target = e.target as HTMLElement;
    const isDataShowLayer = target.dataset.show_layer;
    if (isDataShowLayer === "true") dispatch(hideSearch());
  };

  function setQuery(query: string) {
    console.log(query);
    const target = document.getElementById("search") as HTMLInputElement;
    target.value = query;
  }

  return (
    <form
      data-show_layer={show}
      onClick={handleClick}
      onSubmit={(e) => e.preventDefault()}
      className="input-div z-100 relative flex-1 btn bg-gray-200 order-2"
    >
      <input
        id="search"
        onFocus={() => dispatch(showSearch())}
        name="search"
        className="w-full"
        placeholder="Search"
        onChange={searchProductsDebounce}
      />
      <button type="submit">
        <FiSearch className="text-xl" />
      </button>
      {show && (
        <div
          id="search-list"
          className="absolute left-0 -bottom-2 rounded-xl translate-y-full bg-white w-full max-h-[400px] overflow-auto"
        >
          {products?.map((product: any) => (
            <div className="flex items-center justify-between p-2 border-b border-neutral-300">
              <div className="flex items-center gap-4">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold">
                    <Link
                      data-show_layer={show}
                      href={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                  </h4>
                  <p className="text-sm text-neutral-400">{product.brand}</p>
                </div>
              </div>
              <p className="text-sm">${product.price.toFixed(2)}</p>
            </div>
          ))}
          {queries?.map((query: string) => (
            <div className="flex items-center justify-between p-2 border-b border-neutral-300">
              <p className="text-sm">{query}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuery(query);
                }}
              >
                <BsArrowUpLeft />
              </button>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

export default Search;
