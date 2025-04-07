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

type Vendedor = {
  nome: string;
  cpf: string;
  emailVendedor: string;
  motivoVenda: string;
  dtVenda: string;
  dtEnvio: string;
};

type Empresa = {
  cnpj: string;
  vidas: string;
  vigencia: string;
  razaoSocial: string;
  endereco: string;
  numeroCasa: string;
  complemento: string;
  cep: string;
  bairro: string;
  cidade: string;
  email: string;
  telComercial: string;
  telResidencial: string;
  celular: string;
  banco: string;
  numeroBanco: string;
  agencia: string;
  conta: string;
  responsavel: string;
  cargo: string;
  telefoneResponsavel: string;
  enderecoCorrespondencia: string;
  numeroCorrespondencia: string;
  complementoCorrespondencia: string;
  cepCorrespondencia: string;
  bairroCorrespondencia: string;
  cidadeCorrespondencia: string;
};

type Plano = {
  operadora: string;
  plano: string;
  acomodacao: string;
  valorPlano: string;
  valorTaxa: string;
  valorParcela: string;
  pgtoParcela: string;
};

type Beneficiario = {
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  estadoCivil: string;
  sus: string;
  declaracao: string;
  nomeMae: string;
  altura: string;
  peso: string;
  doenca: string;
  endereco: string;
  numero: string;
  complemento: string;
  cep: string;
  bairro: string;
  cidade: string;
  telComercial: string;
  telResidencial: string;
  celular: string;
  infoPessoais: string;
};

type Dependente = {
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  estadoCivil: string;
  sus: string;
  declaracao: string;
  nomeMae: string;
  altura: string;
  peso: string;
  doenca: string;
  endereco: string;
  numero: string;
  complemento: string;
  cep: string;
  bairro: string;
  cidade: string;
  telComercial: string;
  telResidencial: string;
  celular: string;
  infoPessoais: string;
}

export default function Home() {
  const [dependente, setDependente] = useState(false)
  const [dependentes, setDependentes] = useState(0)
  const [inputsDependentes, setInputsDependentes] = useState<Dependente>({
    nome: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    estadoCivil: '',
    sus: '',
    declaracao: '',
    nomeMae: '',
    altura: '',
    peso: '',
    doenca: '',
    endereco: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telComercial: '',
    telResidencial: '',
    celular: '',
    infoPessoais: '',
  })
  const [inputsVendedor, setInputsVendedor] = useState<Vendedor>({
    nome: '',
    cpf: '',
    emailVendedor: '',
    motivoVenda: '',
    dtVenda: '',
    dtEnvio: '',
  });
  
  const [inputsEmpresa, setInputsEmpresa] = useState<Empresa>({
    cnpj: '',
    vidas: '',
    vigencia: '',
    razaoSocial: '',
    endereco: '',
    numeroCasa: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    email: '',
    telComercial: '',
    telResidencial: '',
    celular: '',
    banco: '',
    numeroBanco: '',
    agencia: '',
    conta: '',
    responsavel: '',
    cargo: '',
    telefoneResponsavel: '',
    enderecoCorrespondencia: '',
    numeroCorrespondencia: '',
    complementoCorrespondencia: '',
    cepCorrespondencia: '',
    bairroCorrespondencia: '',
    cidadeCorrespondencia: '',
  });
  
  const [inputsPlano, setInputsPlano] = useState<Plano>({
    operadora: '',
    plano: '',
    acomodacao: '',
    valorPlano: '',
    valorTaxa: '',
    valorParcela: '',
    pgtoParcela: '',
  });
  
  const [inputsBeneficiario, setInputsBeneficiario] = useState<Beneficiario>({
    nome: '',
    cpf: '',
    rg: '',
    dataNascimento: '',
    estadoCivil: '',
    sus: '',
    declaracao: '',
    nomeMae: '',
    altura: '',
    peso: '',
    doenca: '',
    endereco: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telComercial: '',
    telResidencial: '',
    celular: '',
    infoPessoais: '',
  });



  const [completeVendedor, setCompleteVendedor] = useState(false)
  const [completeEmpresa, setCompleteEmpresa] = useState(false);
  const [completePlano, setCompletePlano] = useState(false);
  const [completeBeneficiario, setCompleteBeneficiario] = useState(false);
  const [emailDestino, setEmailDestino] = useState('')
  const [emailCopia, setEmailCopia] = useState('')
  const [refazer, setRefazer] = useState(false)
  const [inputs, setInputs] = useState({
    dependente: false,
    vendedor: {},
    empresa: {},
    plano: {},
    beneficiario: {},
    dependentes: {}
  });
  useEffect(() => {
    setInputs({
      dependente,
      vendedor: inputsVendedor,
      empresa: inputsEmpresa,
      plano: inputsPlano,
      beneficiario: inputsBeneficiario,
      dependentes: inputsDependentes
    });
  }, [dependente, inputsVendedor, inputsEmpresa, inputsPlano, inputsBeneficiario, inputsDependentes]);

  useEffect(() => {
    if (refazer === true) {
      setInputs({
      dependente: false,
      vendedor: {},
      empresa: {},
      plano: {},
      beneficiario: {},
      dependentes: {}
      })
      setRefazer(false)
    }
  }, [refazer])

  const dependentesTexto = Array.isArray(inputsDependentes)
  ? inputsDependentes.map((dependente, index) => (
      `
      - Dependente ${index + 1}:
      - Nome: ${dependente.nome || "Não informado"}
      - CPF: ${dependente.cpf || "Não informado"}
      - RG: ${dependente.rg || "Não informado"}
      - Data de Nascimento: ${dependente.dataNascimento || "Não informado"}
      - Estado Civil: ${dependente.estadoCivil || "Não informado"}
      - Nº Cartão SUS: ${dependente.sus || "Não informado"}
      - Declaração de Nascido Vivo: ${dependente.declaracao || "Não informado"}
      - Nome da Mãe: ${dependente.nomeMae || "Não informado"}
      - Altura: ${dependente.altura || "Não informado"}
      - Peso: ${dependente.peso || "Não informado"}
      - Possui Doença Pré-Existente: ${dependente.doenca || "Não informado"}
      - Endereço: ${dependente.endereco || "Não informado"}
      - Nº: ${dependente.numero || "Não informado"}
      - Complemento: ${dependente.complemento || "Não informado"}
      - CEP: ${dependente.cep || "Não informado"}
      - Bairro: ${dependente.bairro || "Não informado"}
      - Cidade: ${dependente.cidade || "Não informado"}
      - Telefone Comercial: ${dependente.telComercial || "Não informado"}
      - Telefone Residencial: ${dependente.telResidencial || "Não informado"}
      - Celular: ${dependente.celular || "Não informado"}
      - Informações Pessoais: ${dependente.infoPessoais || "Não informado"}
      `
    )).join('\n')
  : "Nenhum dependente informado.";


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

    ${dependente ? `*Dependetes*: 
      - Nome: ${inputsDependentes.nome || "Não informado"} 
      - CPF: ${inputsDependentes.cpf || "Não informado"}
      - RG: ${inputsDependentes.rg || "Não informado"}
      - Data de Nascimento: ${inputsDependentes.dataNascimento || "Não informado"}
      - Estado Civil: ${inputsDependentes.estadoCivil || "Não informado"}
      - Nº Cartão SUS: ${inputsDependentes.sus || "Não informado"}
      - Declaração de Nascido Vivo: ${inputsDependentes.declaracao || "Não informado"}
      - Nome da Mãe: ${inputsDependentes.nomeMae || "Não informado"}
      - Altura: ${inputsDependentes.altura || "Não informado"}
      - Peso: ${inputsDependentes.peso || "Não informado"}
      - Possui Doença Pré-Existente: ${inputsDependentes.doenca || "Não informado"}
      - Endereço: ${inputsDependentes.endereco || "Não informado"}
      - Nº: ${inputsDependentes.numero || "Não informado"}
      - Complemento: ${inputsDependentes.complemento || "Não informado"}
      - CEP: ${inputsDependentes.cep || "Não informado"}
      - Bairro: ${inputsDependentes.bairro || "Não informado"}
      - Cidade: ${inputsDependentes.cidade || "Não informado"}
      - Telefone Comercial: ${inputsDependentes.telComercial || "Não informado"}
      - Telefone Residencial: ${inputsDependentes.telResidencial || "Não informado"}
      - Celular: ${inputsDependentes.celular || "Não informado"}
      - Informações Pessoais: ${inputsDependentes.infoPessoais || "Não informado"}
      `: ''}

    `;

  const templateParams = {
    from_email: 'henrique.souza@w3gconsultoria.com.br',
    from_name: 'W3G Consultoria',
    to_email: emailDestino,
    reply_to: inputsVendedor.emailVendedor,
    cc_to: emailCopia,
    name: inputsVendedor.nome,
    message: emailBody,
  };

  console.log("Enviando email com:", templateParams);
  console.log('Inputs: ', inputs)

  
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
          Array.from({ length: dependentes }).map((_, index) => (
            <motion.div
          key={index}
          animate={{ opacity: [0, 1], y: [100, 10 ,0] }}>
            <Beneficiario key={`dependente-${index}`} setInputsBeneficiario={setInputsDependentes} setCompleteBeneficiario={setCompleteBeneficiario}>DEPENDENTE</Beneficiario>
          </motion.div>
          ))
        )}
        <div className="flex justify-start px-4 py-1 rounded-b-md bg-gray-300 gap-2">
          {dependente ? null : <input className="border rounded-md w-auto m-2 p-2 bg-blue-900 text-white" type="number" value={dependentes} onChange={(e) => setDependentes(e.target.valueAsNumber)} />}
          {dependente ? null : <Button valid="adicionar" onClick={() => setDependente(true)}>Adicionar Dependentes<CirclePlus className="ml-2" /></Button>}
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
        <motion.div className="flex justify-center w-[100%] gap-2"
        key='enviar-refazer'
        animate={{ opacity: [0, 1], y: [10, 0] }}>
        <Button valid="enviar" onClick={handleClick}>ENVIAR<CircleCheck className="check ml-2"/></Button>
        <Button valid="refazer" onClick={() => setRefazer(true)}>NOVO FORMULÁRIO<RotateCcw className="restart ml-2"/></Button>
        </motion.div>
    </div>
    </AnimatePresence>
  );
}
