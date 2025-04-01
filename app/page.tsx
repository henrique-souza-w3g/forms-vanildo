'use client'
import { Header } from "./components/Header/Header";
import Vendedor from "./components/Vendedor/Vendedor";
import { Montserrat } from 'next/font/google';
import Empresa from "./components/Empresa/Empresa";
import PlanoEscolhido from "./components/PlanoEscolhido/PlanoEscolhido";
import Beneficiario from "./components/Beneficiario/Beneficiario";
import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  const [dependente, setDependente] = useState(false)
  const [count, setCount] = useState(0)
  const [inputsVendedor, setInputsVendedor] = useState({})
  const [completeVendedor, setCompleteVendedor] = useState(false)

  useEffect(() => {
    if (count === 0) {
      setDependente(false)
    }
  }, [count])
  useEffect(() => {
    if (count < 0) {
      setCount(0)
    }
  })

  console.log(inputsVendedor)
  console.log(completeVendedor)

  return (
    <AnimatePresence>
    <div className={`m-0 p-0 box-border ${montserrat.className}`}>
      <Header/>
      <Vendedor setInputsVendedor={setInputsVendedor} setCompleteVendedor={setCompleteVendedor}/>
      {completeVendedor && (
        <motion.div
        key='empresa'
        animate={{ opacity: [0, 1], y: [100, 10 ,0] }}>
          <Empresa/>
        </motion.div>
      )}
      <PlanoEscolhido/>
      <Beneficiario>TITULAR</Beneficiario>
        {dependente && (
          <motion.div
          key='dependente'
          animate={{ opacity: [0, 1], y: [-20, 0]}}>
            <Beneficiario>DEPENDENTE</Beneficiario>
          </motion.div>
        )}
      <div className="flex justify-between">
        <Button valid="adicionar" onClick={() => setDependente(true)}>Adicionar Dependente</Button>
        <Button valid="excluir" onClick={() => setDependente(false)}>Excluir Dependente</Button>
      </div>
    </div>
    </AnimatePresence>
  );
}
