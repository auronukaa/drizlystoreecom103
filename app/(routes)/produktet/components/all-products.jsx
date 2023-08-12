"use client";

import { getProducts } from "@/actions/get-products";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductList from "./product-list";

const AllProducts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: getProducts,
    });

  return (
    <div className="sm:px-6 lg:px-8 pb-24 mt-10">
      <p className="text-lg text-center sm:text-left">
        Rezultatet :{" "}
        <span className="font-semibold">{data?.pages[0].data?.length}</span>
      </p>
      <hr className="w-full mb-7 mt-2 sm:mt-4" />
      <div className="flex items-center justify-center relative">
        <div className="w-full flex items-center justify-center gap-x-7 gap-y-7 px-6 lg:px-0">
          {data?.pages.map((item, id) => (
            <ProductList key={id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
