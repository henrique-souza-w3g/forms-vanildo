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
import { CircleCheck, CirclePlus } from "lucide-react";
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Home() {
  const [dependente, setDependente] = useState(false)
  const [inputsVendedor, setInputsVendedor] = useState({})
  const [completeVendedor, setCompleteVendedor] = useState(false)
  const [inputsEmpresa, setInputsEmpresa] = useState({});
  const [completeEmpresa, setCompleteEmpresa] = useState(false);
  const [inputsPlano, setInputsPlano] = useState({});
  const [completePlano, setCompletePlano] = useState(false);
  const [inputsBeneficiario, setInputsBeneficiario] = useState({});
  const [completeBeneficiario, setCompleteBeneficiario] = useState(false);
  const [emailDestino, setEmailDestino] = useState('')
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setInputs({
      'dependenente': dependente, 
      'vendedor':inputsVendedor, 
      'empresa': inputsEmpresa,
      'plano': inputsPlano,
      'benefeciario': inputsBeneficiario})
  }, [dependente, inputsVendedor, inputsEmpresa, inputsPlano, inputsBeneficiario])

  const handleClick = () => {
    if (!emailDestino) {
      alert('Por favor, insira o e-mail do destinatário')
      return;
    }
    const templateParams = {
      to_email: emailDestino,
      vendedor: JSON.stringify(inputs.vendedor, null, 2),
      empresa: JSON.stringify(inputs.empresa, null, 2),
      plano: JSON.stringify(inputs.plano, null, 2),
      beneficiario: JSON.stringify(inputs.beneficiario, null, 2),
    }
  }

  return (
    <AnimatePresence>
    <div className={`m-0 p-0 box-border ${montserrat.className}`}>
      <Header/>
      <Vendedor setInputsVendedor={setInputsVendedor} setCompleteVendedor={setCompleteVendedor}/>
      {completeVendedor && (
        <motion.div
        key='empresa'
        animate={{ opacity: [0, 1], y: [100, 10 ,0] }}>
          <Empresa setInputsEmpresa={setInputsEmpresa} setCompleteEmpresa={setCompleteEmpresa}/>
        </motion.div>
      )}
      {completeEmpresa && (
        <motion.div 
        key='plano'
        animate={{ opacity: [0,1], y: [100, 10, 0] }}>
          <PlanoEscolhido setInputsPlano={setInputsPlano} setCompletePlano={setCompletePlano}/>
        </motion.div>
      )}
      {completePlano && (
        <motion.div>
          <Beneficiario setInputsBeneficiario={setInputsBeneficiario} setCompleteBeneficiario={setCompleteBeneficiario}>TITULAR</Beneficiario>
        {dependente && (
          <motion.div
          key='dependente'
          animate={{ opacity: [0, 1], y: [-20, 0]}}>
            <Beneficiario setInputsBeneficiario={setInputsBeneficiario} setCompleteBeneficiario={setCompleteBeneficiario}>DEPENDENTE</Beneficiario>
          </motion.div>
        )}
      <div className="flex justify-evenly mt-2">
        <Button valid="adicionar" onClick={() => setDependente(true)}>Adicionar Dependente<CirclePlus className="ml-2" /></Button>
        {dependente ? <Button valid="excluir" onClick={() => setDependente(false)}>Excluir Dependente<CirclePlus className="ml-2 rotate-45 text-red" /></Button> : null }
      </div>
        </motion.div>
      )}
      {completeBeneficiario && (
        <div className="flex justify-center">
          <label className="font-bold mr-2">EMAIL PARA ENVIO</label>
          <input className="border rounded-md w-auto pl-2" type="email" name="email-destino" placeholder="Insira email aqui"/>
          <Button valid="enviar" onClick={handleClick}>Enviar<CircleCheck className="ml-2"/></Button>
        </div>
      )}
      
    </div>
    </AnimatePresence>
  );
}
