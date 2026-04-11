import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Bottom from "@/components/Bottom";
import Fotter from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
         <Services/>
         <Materials/>
         <Bottom/>
      </main>
      <Fotter/>
    </>
  );
}
