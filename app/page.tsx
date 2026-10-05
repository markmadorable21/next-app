import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/users">Users Page</Link>
       {/* this will route to the users page inside users folder and 
       outside of the users folder, it will route to the 
       page.tsx file in the root folder */}
       <ProductCard />
    </div>
  );
}
