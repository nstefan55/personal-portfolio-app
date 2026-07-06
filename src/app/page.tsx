import Nav from "@/components/layout/Nav";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
