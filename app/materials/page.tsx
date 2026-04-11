import Navbar from "@/componentMaterials/Navbar";
import MaterialsGrid from "@/componentMaterials/MaterialsGrid";
import FeaturesSection from "@/componentMaterials/Features";
import Footer from "@/componentMaterials/foot";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
         <MaterialsGrid/>
         <FeaturesSection/>
      </main>
      <Footer/>
    </>
  );
}
