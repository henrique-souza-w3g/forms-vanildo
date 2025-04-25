'use client'
import React, { useEffect, useState } from "react"
import { formatCelular, formatCEP, formatCPF, formatRG, formatTelefone } from "../Format/Format";

interface BeneficiarioProps {
    children: React.ReactNode;
    setInputsBeneficiario: (inputs: any) => void;
}

export default function Beneficiario({ children, setInputsBeneficiario }: BeneficiarioProps) {
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [rg, setRg] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('')
    const [sus, setSus] = useState('')
    const [declaracao, setDeclaracao] = useState('')
    const [nomeMae, setNomeMae] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [doenca, setDoenca] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [telResidencial, setTelResidencial] = useState('')
    const [telComercial, setTelComercial] = useState('')
    const [celular, setCelular] = useState('')
    const [infoPessoais, setInfoPessoais] = useState('')

    useEffect(() => {
        setInputsBeneficiario({
            nome, cpf, rg, dataNascimento, estadoCivil, sus, 
            declaracao, nomeMae, altura, peso, doenca, endereco,
            numero, bairro, complemento, cidade, cep, 
            telResidencial, telComercial, celular, infoPessoais
        })
    }, [nome, cpf, rg, dataNascimento, estadoCivil, sus, 
        declaracao, nomeMae, altura, peso, doenca, endereco,
        numero, bairro, complemento, cidade, cep, 
        telResidencial, telComercial, celular, infoPessoais, setInputsBeneficiario])


    return (
        <>
        <p className="text-center bg-blue-900 text-white text-2xl font-bold p-2">{children}</p>
        <form className="grid grid-cols-3 gap-3 p-4 bg-white rounded-b-md">
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">NOME</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em] h-[1.7em]" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">CPF</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em] h-[1.7em]" type="text" value={cpf} onChange={(e) => setCPF(formatCPF(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">RG</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em] h-[1.7em]" type="text" value={rg} onChange={(e) => setRg(formatRG(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">DATA NASCIMENTO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em] h-[1.7em]" type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
            <label className="font-bold mr-2">ESTADO CIVIL</label>
            <select className="border rounded-md pl-2 w-auto" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
                <option value="0">Selecionar</option>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
            </select>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">Nº CARTÃO SUS</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={sus} onChange={(e) => setSus(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">DECLAR. NASCIDO VIVO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={declaracao} onChange={(e) => setDeclaracao(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">NOME DA MÃE</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={nomeMae} onChange={(e) => setNomeMae(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">ALTURA</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">PESO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">POSSUI DOENÇA PRÉ-EXISTENTE</label>
                <select className="border rounded-md pl-2 w-auto" value={doenca} onChange={(e) => setDoenca(e.target.value)}>
                    <option value="0">Selecionar</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">ENDEREÇO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">Nº</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={numero} onChange={(e) => setNumero(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">COMPLEMENTO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">BAIRRO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CIDADE</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CEP</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={cep} onChange={(e) => setCep(formatCEP(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">TEL. RESIDENCIAL</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="tel" value={telResidencial} onChange={(e) => setTelResidencial(formatTelefone(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">TEL. COMERCIAL</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="tel" value={telComercial} onChange={(e) => setTelComercial(formatCelular(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CELULAR</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="tel" value={celular} onChange={(e) => setCelular(formatCelular(e.target.value))}/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">INFORMAÇÕES ADICIONAIS</label>
                <textarea className="border rounded-md pl-2 w-auto" placeholder="Opcional" value={infoPessoais} onChange={(e) => setInfoPessoais(e.target.value)}/>
            </div>
        </form>
        </>
    )
}