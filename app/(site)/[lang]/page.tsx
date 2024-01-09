import About from "@/components/Site/Home/About";
import Contact from "@/components/Site/Home/Contact";
import Hero from "@/components/Site/Home/Hero";
import Portfolio from "@/components/Site/Home/Portfolio";
import Subscription from "@/components/Site/Home/Subscription";
import WhyChooseUs from "@/components/Site/Home/WhyChooseUs";

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
