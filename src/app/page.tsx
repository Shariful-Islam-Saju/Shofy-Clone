import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "./helpers";

export default async function Home() {
  const product = await getData("https://dummyjson.com/products");

  return (
    <main>
      <BottomHeader />
      <Banner />
      <ProductList product={product} />
    </main>
  );
}
