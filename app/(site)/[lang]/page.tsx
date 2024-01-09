import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Subscription from "@/components/Home/Subscription";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <WhyChooseUs />
      <Subscription />
      <About />
      <Contact />
    </main>
  );
}
