import Numbers from "@/components/Numbers";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Landing } from "../components/Landing";
import { Map } from "../components/Map";
import { Navbar } from "../components/Navbar";
import { Question } from "../components/Questions";
import Clients from "@/components/Clients";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-white dark:bg-black">
      <Navbar />
      <Landing />
      <About />
      <Services />
      {/* <Clients /> */}
      <Numbers />
      <Question />
      <Map />
      <Footer />
    </div>
  );
}
