import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "./helpers";

export default async function Home() {
  const products = await getData("https://dummyjson.com/products");

  return (
    <main>
      <Banner />
      <ProductList product={products} />
    </main>
  );
}
