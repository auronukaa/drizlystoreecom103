import Container from "@/components/ui/container";
import getQueryClient from "@/provider/getQueryClient";
import AllProducts from "./components/all-products";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/provider/HydrateClient";
import { getProducts } from "@/actions/get-products";
import Billboard from "./components/billboard";

export const revalidate = 0;

const Products = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(["products"], getProducts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="bg-white">
      <Container>
        <Billboard />
        <Hydrate state={dehydratedState}>
          <AllProducts />
        </Hydrate>
      </Container>
    </div>
  );
};

export default Products;
