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
import { formatIdade, formatData } from "./components/Format/Format";
import autoTable from "jspdf-autotable";

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

type GerarPDFProps = {
  inputsVendedor: Vendedor;
  inputsEmpresa: Empresa;
  inputsPlano: Plano;
  inputsBeneficiario: Beneficiario;
  inputsDependentes: Beneficiario[];
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



  const [emailDestino, setEmailDestino] = useState('')
  const [emailCopia, setEmailCopia] = useState('')
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


  const atualizarDepdentes = (index: any, novoValor: Beneficiario) => {
    setInputsDependentes((prev) => {
      const novos = [...prev];
      novos[index] = novoValor;
      return novos;
    })
  }

  const handleClick = async () => {
    if (!emailDestino || !inputsVendedor.emailVendedor) {
      alert('Por favor, insira o e-mail do destinatário')
      return;
    }
    const emailBody = `
    --------- Dados do Vendedor ---------
    - Nome: ${inputsVendedor.nome}
    - CPF: ${inputsVendedor.cpf}
    - E-mail: ${inputsVendedor.emailVendedor}
    - Motivo da Venda: ${inputsVendedor.motivoVenda}
    - Data da Venda: ${formatData(inputsVendedor.dtVenda)}
    - Data do Envio do Contrato: ${formatData(inputsVendedor.dtEnvio)}

    --------- Dados da Empresa ---------
    - CNPJ: ${inputsEmpresa.cnpj}
    - Vidas: ${inputsEmpresa.vidas}
    - Vigência: ${formatData(inputsEmpresa.vigencia)}
    - Razão Social: ${inputsEmpresa.razaoSocial}
    - Endereco: ${inputsEmpresa.endereco}
    - Nº: ${inputsEmpresa.numeroCasa}
    - Complemento: ${inputsEmpresa.complemento}
    - CEP: ${inputsEmpresa.cep}
    - Bairro: ${inputsEmpresa.bairro}
    - Cidade: ${inputsEmpresa.cidade}
    - Email: ${inputsEmpresa.email}
    - Telefone Comercial: ${inputsEmpresa.telComercial}
    - Telefone Residencial: ${inputsEmpresa.telResidencial}
    - Celular: ${inputsEmpresa.celular}
    - Banco: ${inputsEmpresa.banco}
    - Nº do Banco: ${inputsEmpresa.numeroBanco}
    - Agência: ${inputsEmpresa.agencia}
    - Nº da Conta: ${inputsEmpresa.conta}
    - Responsável: ${inputsEmpresa.responsavel}
    - Cargo: ${inputsEmpresa.cargo}
    - Telefone Responsável: ${inputsEmpresa.telefoneResponsavel}
    - Endereço da Correspondência: ${inputsEmpresa.enderecoCorrespondencia}
    - Nº da Correspondência: ${inputsEmpresa.numeroCorrespondencia}
    - Complemento da Correspondência: ${inputsEmpresa.complementoCorrespondencia}
    - CEP da Correspondência: ${inputsEmpresa.cepCorrespondencia}
    - Bairro da Correspondência: ${inputsEmpresa.bairroCorrespondencia}
    - Cidade da Correspondência: ${inputsEmpresa.cidadeCorrespondencia}

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
    - Data de Nascimento: ${formatData(inputsBeneficiario.dataNascimento) || "Não informado"} - ${formatIdade(inputsBeneficiario.dataNascimento) || "Não informado"} anos
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
      - Data de Nascimento: ${formatData(inputsDependentes.dataNascimento) || "Não informado"} - ${formatIdade(inputsDependentes.dataNascimento) || "Não informado"} anos
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
    const gerarPDF = async ({
      inputsVendedor,
      inputsEmpresa,
      inputsPlano,
      inputsBeneficiario,
      inputsDependentes,
    }: GerarPDFProps): Promise<string> => {
      const doc = new jsPDF() as jsPDF & { lastAutoTable?: { finalY: number } };
      let y = 20;

      const addSection = (title: string, rows: [string, string | number | null | undefined][]) => {
        doc.setFontSize(14);
        doc.text(title, 14, y);
        autoTable(doc, {
          startY: y + 5,
          head: [['Campo', 'Valor']],
          body: rows.map(([campo, valor]) => [campo, valor || 'Não informado']),
          margin: { left: 14 },
        });
        y = (doc as any).lastAutoTable?.finalY + 10 || y + 40;
        y = y > 270 ? 20 : y;
      };

      addSection('Dados do Vendedor', [
        ['Nome', inputsVendedor.nome],
        ['CPF', inputsVendedor.cpf],
        ['E-mail', inputsVendedor.emailVendedor],
        ['Motivo da Venda', inputsVendedor.motivoVenda],
        ['Data da Venda', formatData(inputsVendedor.dtVenda)],
        ['Data do Envio', formatData(inputsVendedor.dtEnvio)],
      ]);

      addSection('Dados da Empresa', [
        ['CNPJ', inputsEmpresa.cnpj],
        ['Razão Social', inputsEmpresa.razaoSocial],
        ['Vidas', inputsEmpresa.vidas],
        ['Vigência', formatData(inputsEmpresa.vigencia)],
        ['Endereço', `${inputsEmpresa.endereco} - ${inputsEmpresa.numeroCasa}, ${inputsEmpresa.bairro}, ${inputsEmpresa.cidade}`],
        ['Telefone', inputsEmpresa.telefoneResponsavel],
        ['Responsável', inputsEmpresa.responsavel],
      ]);

      addSection('Plano Escolhido', [
        ['Operadora', inputsPlano.operadora],
        ['Plano', inputsPlano.plano],
        ['Acomodação', inputsPlano.acomodacao],
        ['Valor do Plano', `${inputsPlano.valorPlano}`],
        ['Valor da Taxa', `${inputsPlano.valorTaxa}`],
        ['1ª Parcela', `${inputsPlano.valorParcela}`],
        ['Pagamento da 1ª Parcela', formatData(inputsPlano.pgtoParcela)],
      ]);
      doc.addPage();
      y = 20

      addSection('Titular', [
        ['Nome', inputsBeneficiario.nome],
        ['CPF', inputsBeneficiario.cpf],
        ['RG', inputsBeneficiario.rg],
        ['Nascimento', `${formatData(inputsBeneficiario.dataNascimento)} - ${formatIdade(inputsBeneficiario.dataNascimento)} anos`],
        ['Celular', inputsBeneficiario.celular],
        ['Doença Pré-Existente', inputsBeneficiario.doenca],
        ['Endereço', `${inputsBeneficiario.endereco} - ${inputsBeneficiario.numero}, ${inputsBeneficiario.bairro}, ${inputsBeneficiario.cidade}`],
      ]);

      if (inputsDependentes?.length > 0) {
        inputsDependentes.forEach((dep, index) => {
          y++;
          addSection(`Dependente ${index + 1}`, [
            ['Nome', dep.nome],
            ['CPF', dep.cpf],
            ['RG', dep.rg],
            ['Nascimento', `${formatData(dep.dataNascimento)} - ${formatIdade(dep.dataNascimento)} anos`],
            ['Altura', dep.altura],
            ['Peso', dep.peso],
            ['Doença Pré-Existente', dep.doenca],
            ['Celular', dep.celular],
          ]);
        });
      }

      const pdfBase64 = doc.output('datauristring').split(',')[1];
      return pdfBase64;
    };

    const pdfBase64 = await gerarPDF({
      inputsVendedor,
      inputsEmpresa,
      inputsPlano,
      inputsBeneficiario,
      inputsDependentes,
    });

    const templateParams = {
      from_name: '4.0 Consultoria',
      empresa_name: inputsEmpresa.razaoSocial,
      to_email: inputsVendedor.emailVendedor && emailDestino,
      cc_to: emailCopia,
      name: inputsVendedor.nome,
      message: emailBody,
      time: new Date().toLocaleString(),
      file: pdfBase64,
    };
    console.log("Arquivo", pdfBase64)
    console.log("Enviando email com:", templateParams);
    console.log('Inputs: ', inputsBeneficiario)

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
      <div className={`m-0 p-0 box-border ${montserrat.className}`} id="container-print">
        <Header id="header" />
        <Vendedor setInputsVendedor={setInputsVendedor} />
        <Empresa setInputsEmpresa={setInputsEmpresa} />
        <PlanoEscolhido setInputsPlano={setInputsPlano} />
        <Beneficiario setInputsBeneficiario={setInputsBeneficiario}>TITULAR</Beneficiario>
        {dependente && (
          Array.from({ length: dependentes }).map((_, index) => (
            <motion.div
              key={index}
              animate={{ opacity: [0, 1], y: [100, 10, 0] }}>
              <Beneficiario key={`dependente-${index}`} setInputsBeneficiario={(dados) => atualizarDepdentes(index, dados)} >DEPENDENTE</Beneficiario>
            </motion.div>
          ))
        )}
        <div className="dependente flex justify-start px-4 py-1 rounded-b-md gap-2">
          {dependente ? null : <input className="input border rounded-md w-auto m-2 p-2" type="number" value={dependentes} onChange={(e) => setDependentes(e.target.valueAsNumber)} />}
          {dependente ? null : <Button valid="adicionar" onClick={() => setDependente(true)}>Adicionar Dependentes<CirclePlus className="ml-2" /></Button>}
          {dependente ? <Button valid="excluir" onClick={() => setDependente(false)}>Excluir Dependente<CirclePlus className="ml-2 rotate-45 text-red" /></Button> : null}
        </div>
        <div className="emails flex flex-col justify-center align-middle h-[100%] py-2 px-5 w-auto rounded-md mt-2 gap-5">
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
          <Button valid="enviar" onClick={handleClick}>ENVIAR<CircleCheck className="check ml-2" /></Button>
          <Button valid="refazer" onClick={() => window.location.reload()}>NOVO FORMULÁRIO<RotateCcw className="restart ml-2" /></Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
