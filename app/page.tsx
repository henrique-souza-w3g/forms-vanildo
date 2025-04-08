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
import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheck, CirclePlus, RotateCcw } from "lucide-react";
import { jsPDF } from "jspdf";
import { formatData } from "./components/Format/Format";

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

export default function Home() {
  const [dependente, setDependente] = useState(false)
  const [dependentes, setDependentes] = useState(0)
  const [inputsDependentes, setInputsDependentes] = useState<Beneficiario[]>([])
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

  const handleRefazer = () => {
    if (refazer === true) {
      setInputs({
      dependente: false,
      vendedor: {},
      empresa: {},
      plano: {},
      beneficiario: {},
      dependentes: []
      })
      setRefazer(false)
    }
  }
  
  const atualizarDepdentes = (index: any, novoValor: Beneficiario) => {
    setInputsDependentes((prev) => {
      const novos = [...prev];
      novos[index] = novoValor;
      return novos;
    })
  }

  const handleClick = () => {
    if (!emailDestino || !inputsVendedor.emailVendedor) {
      alert('Por favor, insira o e-mail do destinatário')
      return;
    }
    console.log(inputsDependentes)
    const emailBody = `
    --------- Dados do Vendedor ---------
    - Nome: ${inputsVendedor.nome}
    - CPF: ${inputsVendedor.cpf}
    - E-mail: ${inputsVendedor.emailVendedor}
    - Motivo da Venda: ${inputsVendedor.motivoVenda}
    - Data da Venda: ${formatData(inputsVendedor.dtVenda)}
    - Data do Envio do Contrato: ${formatData(inputsVendedor.dtEnvio)}

    --------- Dados da Empresa ---------
    - CNPJ: ${inputsEmpresa.cnpj }
    - Vidas: ${inputsEmpresa.vidas }
    - Vigência: ${formatData(inputsEmpresa.vigencia) }
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

    --------- Plano Escolhido ---------
    - Operadora: ${inputsPlano.operadora || "Não informado"}
    - Plano: ${inputsPlano.plano || "Não informado"}
    - Acomodação: R$ ${inputsPlano.acomodacao || "Não informado"}
    - Valor do Plano: R$ ${inputsPlano.valorPlano || "Não informado"}
    - Valor da Taxa: R$ ${inputsPlano.valorTaxa || "Não informado"}
    - Valor da 1º Parcela: R$ ${inputsPlano.valorParcela || "Não informado"}
    - Pagamento da 1º Parcela: ${formatData(inputsPlano.pgtoParcela) || "Não informado"}

    --------- Titular ---------
    - Nome: ${inputsBeneficiario.nome || "Não informado"}
    - CPF: ${inputsBeneficiario.cpf || "Não informado"}
    - RG: ${inputsBeneficiario.rg || "Não informado"}
    - Data de Nascimento: ${formatData(inputsBeneficiario.dataNascimento) || "Não informado"}
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

    ${dependente && dependentes > 0 ? inputsDependentes.map((inputsDependentes, index) =>
      `--------- Dependente ${index + 1} ---------
      - Nome: ${inputsDependentes.nome || "Não informado"}
      - CPF: ${inputsDependentes.cpf || "Não informado"}
      - RG: ${inputsDependentes.rg || "Não informado"}
      - Data de Nascimento: ${formatData(inputsDependentes.dataNascimento) || "Não informado"}
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
      - Informações Pessoais: ${inputsDependentes.infoPessoais || "Não informado"}\n`
    ).join('\n') : ''}

    `;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [210, 297]
    });
    const lines = doc.splitTextToSize(emailBody, 180);
    const pdfImg = "data:image/png;base64,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";
    doc.addImage(pdfImg, 'PNG', 170, 15, 10, 10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    let y = 10;

    for (let i = 0; i < lines.length; i++) {
      if (y + 7 > doc.internal.pageSize.height - 10) {
        doc.addPage();
        doc.addImage(pdfImg, 'PNG', 170, 15, 10, 10); // adiciona nova página
        y = 10; // reseta Y
      }
      doc.text(lines[i], 10, y);
      y += 7;
    }

    const pdfBase64 = doc.output('datauristring');

  const templateParams = {
    from_name: '4.0 Consultoria',
    empresa_name: inputsEmpresa.razaoSocial,
    reply_to: emailDestino,
    to_email: inputsVendedor.emailVendedor,
    cc_to: emailCopia,
    name: inputsVendedor.nome,
    message: emailBody,
    time: new Date().toLocaleString(),
    file: pdfBase64,
  };

  

  console.log("Enviando email com:", templateParams);
  console.log('Inputs: ', inputs)

  
    if (!completeVendedor || !completeEmpresa || !completePlano || !completeBeneficiario) {
      alert("Por favor, complete o formulário antes de enviar.")
      return;
    };

    emailjs.send(
      'service_ee4xbqw', // Service ID
      'template_b3h44af', // Template ID
      templateParams,
      'FqXs7MJHuqbGb01VE' // User ID
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
            <Beneficiario key={`dependente-${index}`} setInputsBeneficiario={(dados) => atualizarDepdentes(index, dados)} setCompleteBeneficiario={setCompleteBeneficiario}>DEPENDENTE</Beneficiario>
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
        <Button valid="refazer" onClick={handleRefazer}>NOVO FORMULÁRIO<RotateCcw className="restart ml-2"/></Button>
        </motion.div>
    </div>
    </AnimatePresence>
  );
}
