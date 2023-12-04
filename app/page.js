import AndMore from "@/components/AndMore";
import DontMissOut from "@/components/DontMissOut";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Navbar from "@/components/Navbar";
import PremierFeatures from "@/components/PremierFeatures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero  />
      <PremierFeatures />
      <AndMore/>
      <Integration />
      <Faq />
      <Pricing />
      <Testimonials />
      <DontMissOut />
      <Footer/>
    
    </main>
  );
}
