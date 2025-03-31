import Image from "next/image";
import { Header } from "./components/Header/Header";
import Vendedor from "./components/Vendedor/Vendedor";
import { Montserrat } from 'next/font/google';
import Empresa from "./components/Empresa/Empresa";
import PlanoEscolhido from "./components/PlanoEscolhido/PlanoEscolhido";

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  return (
    <div className={`m-0 p-0 box-border ${montserrat.className}`}>
      <Header />
      <Vendedor/>
      <Empresa/>
      <PlanoEscolhido/>
    </div>
  );
}
