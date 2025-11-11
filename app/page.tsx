import FeaturedMeals from "@/components/FeaturedMeals";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div>
        <Navbar />
        <Hero />
      </div>
      <FeaturedMeals />
    </main>
  );
}
