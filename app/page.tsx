import Image from "next/image";
import { Header } from "./components/Header/Header";
import Vendedor from "./components/Vendedor/Vendedor";

export default function Home() {
  return (
    <div className="container p-20">
      <Header/>
      <Vendedor/>
    </div>
  );
}
