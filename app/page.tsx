'use client'
import { Header } from "./components/Header/Header";
import emailjs from 'emailjs-com';
import Vendedor from "./components/Vendedor/Vendedor";
import { Montserrat } from 'next/font/google';
import Empresa from "./components/Empresa/Empresa";
import PlanoEscolhido from "./components/PlanoEscolhido/PlanoEscolhido";
import Beneficiario from "./components/Beneficiario/Beneficiario";
import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { CircleCheck, CirclePlus, RotateCcw } from "lucide-react";
import { error } from "console";
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
  const [emailCopia, setEmailCopia] = useState('')
  const [refazer, setRefazer] = useState(false)
  const [inputs, setInputs] = useState({
    dependente: false,
    vendedor: {},
    empresa: {},
    plano: {},
    beneficiario: {}
  });
  useEffect(() => {
    setInputs({
      dependente,
      vendedor: inputsVendedor,
      empresa: inputsEmpresa,
      plano: inputsPlano,
      beneficiario: inputsBeneficiario
    });
  }, [dependente, inputsVendedor, inputsEmpresa, inputsPlano, inputsBeneficiario]);

  useEffect(() => {
    if (refazer === true) {
      setInputs({
      dependente: false,
      vendedor: {},
      empresa: {},
      plano: {},
      beneficiario: {}
      })
      setRefazer(false)
    }
  }, [refazer])

  const handleClick = () => {
    if (!emailDestino || !inputsVendedor.emailVendedor) {
      alert('Por favor, insira o e-mail do destinatário')
      return;
    }

    const emailBody = `
    *Dados do Vendedor*:
    - Nome: ${inputsVendedor.nome}
    - CPF: ${inputsVendedor.cpf}
    - E-mail: ${inputsVendedor.emailVendedor}
    - Motivo da Venda: ${inputsVendedor.motivoVenda}
    - Data da Venda: ${inputsVendedor.dtVenda}
    - Data do Envio do Contrato: ${inputsVendedor.dtEnvio}

    *Dados da Empresa*:
    - CNPJ: ${inputsEmpresa.cnpj }
    - Vidas: ${inputsEmpresa.vidas }
    - Vigência: ${inputsEmpresa.vigencia }
    - Razão Social: ${inputsEmpresa.razaoSocial }
    - Endereco: ${inputsEmpresa.endereco }
    - Nº: ${inputsEmpresa.numeroCasa }
    - Complemento: ${inputsEmpresa.complemento }
    - CEP: ${inputsEmpresa.cep }
    - Bairro: ${inputsEmpresa.bairro }
    - Cidade: ${inputsEmpresa.cidade }
    - Email: ${inputsEmpresa.email }
    - Telefone Comercial: ${inputsEmpresa.telComercial }
    - Telefone Residencial: ${inputsEmpresa.telResidencial }
    - Celular: ${inputsEmpresa.celular }
    - Banco: ${inputsEmpresa.banco }
    - Nº do Banco: ${inputsEmpresa.numeroBanco }
    - Agência: ${inputsEmpresa.agencia }
    - Nº da Conta: ${inputsEmpresa.conta }
    - Responsável: ${inputsEmpresa.responsavel }
    - Cargo: ${inputsEmpresa.cargo }
    - Telefone Responsável: ${inputsEmpresa.telefoneResponsavel }
    - Endereço da Correspondência: ${inputsEmpresa.enderecoCorrespondencia }
    - Nº da Correspondência: ${inputsEmpresa.numeroCorrespondencia }
    - Complemento da Correspondência: ${inputsEmpresa.complementoCorrespondencia}
    - CEP da Correspondência: ${inputsEmpresa.cepCorrespondencia }
    - Bairro da Correspondência: ${inputsEmpresa.bairroCorrespondencia }
    - Cidade da Correspondência: ${inputsEmpresa.cidadeCorrespondencia }

    *Plano Escolhido*:
    - Operadora: ${inputsPlano.operadora || "Não informado"}
    - Plano: ${inputsPlano.plano || "Não informado"}
    - Acomodação: R$ ${inputsPlano.acomodacao || "Não informado"}
    - Valor do Plano: R$ ${inputsPlano.valorPlano || "Não informado"}
    - Valor da Taxa: R$ ${inputsPlano.valorTaxa || "Não informado"}
    - Valor da 1º Parcela: R$ ${inputsPlano.valorParcela || "Não informado"}
    - Pagamento da 1º Parcela: ${inputsPlano.pgtoParcela || "Não informado"}

    *Titular*:
    - Nome: ${inputsBeneficiario.nome || "Não informado"}
    - CPF: ${inputsBeneficiario.cpf || "Não informado"}
    - RG: ${inputsBeneficiario.rg || "Não informado"}
    - Data de Nascimento: ${inputsBeneficiario.dataNascimento || "Não informado"}
    - Estado Civil: ${inputsBeneficiario.estadoCivil || "Não informado"}
    - Nº Cartão SUS: ${inputsBeneficiario.sus || "Não informado"}
    - Declaração de Nascido Vivo: ${inputsBeneficiario.declaracao || "Não informado"}
    - Nome da Mãe: ${inputsBeneficiario.nomeMae || "Não informado"}
    - Altura: ${inputsBeneficiario.altura || "Não informado"}
    - Peso: ${inputsBeneficiario.peso || "Não informado"}
    - Possui Doença Pré-Existente: ${inputsBeneficiario.doenca || "Não informado"}
    - Endereço: ${inputsBeneficiario.endereco || "Não informado"}
    - Nº: ${inputsBeneficiario.numero || "Não informado"}
    - Complemento: ${inputsBeneficiario.complemento || "Não informado"}
    - CEP: ${inputsBeneficiario.cep || "Não informado"}
    - Bairro: ${inputsBeneficiario.bairro || "Não informado"}
    - Cidade: ${inputsBeneficiario.cidade || "Não informado"}
    - Telefone Comercial: ${inputsBeneficiario.telComercial || "Não informado"}
    - Telefone Residencial: ${inputsBeneficiario.telResidencial || "Não informado"}
    - Celular: ${inputsBeneficiario.celular || "Não informado"}
    - Informações Pessoais: ${inputsBeneficiario.infoPessoais || "Não informado"}
  `;

  const templateParams = {
    from_email: inputsVendedor.emailVendedor,
    from_name: 'W3G Consultoria',
    to_email: emailDestino,
    reply_to: "henrique.souza@w3gconsultoria.com.br",
    cc_to: emailCopia,
    name: inputsVendedor.nome,
    message: emailBody,
  };

  console.log("Enviando email com:", templateParams);
  console.log('Inputs: ', inputsEmpresa)

  
    if (!completeVendedor || !completeEmpresa || !completePlano || !completeBeneficiario) {
      alert("Por favor, complete o formulário antes de enviar.")
      return;
    };

    emailjs.send(
      'service_yq83gbb', // Service ID
      'template_50psys2', // Template ID
      templateParams,
      'XgLipPhJoM6lrrfHn' // User ID
    ).then(response => {
      console.log("Email enviado!", response);
      alert("Email enviado com sucesso!");
    }).catch(error => {
      console.error("Erro ao enviar email", error);
      alert("Erro ao enviar e-mail.");
    });
  };

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
      <div className="flex justify-evenly bg-gray-300">
        <Button valid="adicionar" onClick={() => setDependente(true)}>Adicionar Dependente<CirclePlus className="ml-2" /></Button>
        {dependente ? <Button valid="excluir" onClick={() => setDependente(false)}>Excluir Dependente<CirclePlus className="ml-2 rotate-45 text-red" /></Button> : null }
      </div>
        </motion.div>
      )}
        <div className="flex flex-col justify-center align-middle h-[100%] bg-blue-900 py-2 px-5 w-auto rounded-md mt-2 text-white gap-5">
          <div className="flex justify-between w-[70%]">
            <label className="font-bold mr-2">EMAIL PARA ENVIO</label>
            <input className="border rounded-md w-[70%] h-[1.7em] pl-2 mr-2 text-white" type="email" name="email-destino" placeholder="Insira email aqui" value={emailDestino} onChange={e => setEmailDestino(e.target.value)} />
          </div>
          <div className="flex justify-between w-[70%]">
            <label className="font-bold mr-2">EMAIL EM CÓPIA</label>
            <input className="border rounded-md w-[70%] h-[1.7em] pl-2 mr-2 text-white" type="email" name="email-copia" placeholder="Insira email aqui" value={emailCopia} onChange={e => setEmailCopia(e.target.value)} />
          </div>
        </div>
      {completeBeneficiario && (
        <motion.div className="flex justify-center w-[100%] gap-2"
        key='enviar-refazer'
        animate={{ opacity: [0, 1], y: [10, 0] }}>
        <Button valid="enviar" onClick={handleClick}>ENVIAR<CircleCheck className="check ml-2"/></Button>
        <Button valid="refazer" onClick={() => setRefazer(true)}>NOVO FORMULÁRIO<RotateCcw className="restart ml-2"/></Button>
        </motion.div>
      )}  
      
    </div>
    </AnimatePresence>
  );
}
