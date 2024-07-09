import Image from "next/image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
