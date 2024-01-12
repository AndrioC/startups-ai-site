import About from "@/components/site/home/about";
import Contact from "@/components/site/home/contact";
import Hero from "@/components/site/home/hero";
import Portfolio from "@/components/site/home/portfolio";
import Subscription from "@/components/site/home/subscription";
import WhyChooseUs from "@/components/site/home/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Subscription />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
