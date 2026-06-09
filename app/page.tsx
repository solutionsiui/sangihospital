import Hero from "@/Components/Home/Hero";
import Services from "@/Components/Home/Services";
import OurDepartment from "@/Components/Home/OurDepartment";
import "@/Components/Home/home.css";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <OurDepartment />
      <Services />
    </main>
  );
}
