import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import Sections from "~/components/sections/Index";
import { fetchProducts } from "~/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tienda" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function loader() {
  const data = await fetchProducts();
  return data;
}
export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <Sections />
    </main>
  );
}
