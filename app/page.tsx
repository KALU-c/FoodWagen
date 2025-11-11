import FeaturedMeals from "@/components/Meal/FeaturedMeals";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div>
        <Navbar />
        <Hero />
      </div>
      <FeaturedMeals />
      <Footer />
    </main>
  );
}
