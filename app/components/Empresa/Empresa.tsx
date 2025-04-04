'use client'

import { useEffect, useState } from "react";
import { formatCelular, formatCEP, formatCNPJ, formatTelefone } from "../Format/Format";

interface EmpresaProps {
    setInputsEmpresa: (inputs: any) => void;
    setCompleteEmpresa: (complete: boolean) => void;
}

export default function({ setInputsEmpresa, setCompleteEmpresa }: EmpresaProps) {
    const [cnpj, setCnpj] = useState('');
    const [vidas, setVidas] = useState('')
    const [vigencia, setVigencia] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numeroCasa, setNumeroCasa] = useState('')
    const [bairro, setBairro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [telComercial, setTelComercial] = useState('')
    const [telResidencial, setTelResidencial] = useState('')
    const [celular, setCelular] = useState('')
    const [numeroBanco, setNumeroBanco] = useState('')
    const [banco, setBanco] = useState('')
    const [agencia, setAgencia] = useState('')
    const [conta, setConta] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefoneResponsavel, setTelefoneResponsavel] = useState('')
    const [enderecoCorrespondencia, setEnderecoCorrespondencia] = useState('')
    const [numeroCorrespondencia, setNumeroCorrespondencia] = useState('')
    const [complementoCorrespondencia, setComplementoCorrespondencia] = useState('')
    const [cepCorrespondencia, setCepCorrespondencia] = useState('')
    const [bairroCorrespondencia, setBairroCorrespondencia] = useState('')
    const [cidadeCorrespondencia, setCidadeCorrespondencia] = useState('')

    useEffect(() => {
            setInputsEmpresa({cnpj, vidas, vigencia, razaoSocial, endereco, numeroCasa, bairro, complemento, cidade, cep, email, telComercial,
                telResidencial, celular, numeroBanco, banco, agencia, conta, responsavel, cargo, telefoneResponsavel, enderecoCorrespondencia,
                numeroCorrespondencia, complementoCorrespondencia, cepCorrespondencia, bairroCorrespondencia, cidadeCorrespondencia})
        }, [cnpj, vidas, vigencia, razaoSocial, endereco, numeroCasa, bairro, complemento, cidade, cep, email, telComercial,
            telResidencial, celular, numeroBanco, banco, agencia, conta, responsavel, cargo, telefoneResponsavel, enderecoCorrespondencia,
            numeroCorrespondencia, complementoCorrespondencia, cepCorrespondencia, bairroCorrespondencia, cidadeCorrespondencia])

    useEffect(() => {
        if (cnpj && vidas && vigencia && razaoSocial && endereco && numeroCasa && bairro && cidade && cep && email && telComercial &&
            telResidencial && celular && numeroBanco && banco && agencia && conta && responsavel && cargo && telefoneResponsavel && enderecoCorrespondencia &&
            numeroCorrespondencia && cepCorrespondencia && bairroCorrespondencia && cidadeCorrespondencia) {
            setCompleteEmpresa(true)
        }
        else {
            setCompleteEmpresa(false)
        }
    }, [cnpj, vidas, vigencia, razaoSocial, endereco, numeroCasa, bairro, cidade, cep, email, telComercial,
        telResidencial, celular, numeroBanco, banco, agencia, conta, responsavel, cargo, telefoneResponsavel, enderecoCorrespondencia,
        numeroCorrespondencia, cepCorrespondencia, bairroCorrespondencia, cidadeCorrespondencia])
    return (
        <>
            <p className="text-center bg-blue-900 text-white text-2xl font-bold p-2">EMPRESA</p>
            <form className="grid grid-cols-3 gap-3 p-6 bg-white">
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CNPJ</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cnpj} onChange={(e) => setCnpj(formatCNPJ(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VIDAS</label>
                    <select className="border rounded-md pl-2 w-auto" value={vidas} onChange={(e) => setVidas(e.target.value)}>
                        <option value="0">Selecionar</option>
                        <option value="2 a 29 Vidas">2 a 29 Vidas</option>
                        <option value="30 a 99 Vidas">30 a 99 Vidas</option>
                    </select>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VIGÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="date" value={vigencia} onChange={(e) => setVigencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">RAZÃO SOCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ENDEREÇO CNPJ</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={numeroCasa} onChange={(e) => setNumeroCasa(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">COMPLEMENTO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CEP</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cep} onChange={(e) => setCep(formatCEP(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BAIRRO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CIDADE</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">EMAIL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br />
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL. COMERCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel" value={telComercial} onChange={(e) => setTelComercial(formatCelular(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL. RESIDENCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel" value={telResidencial} onChange={(e) => setTelResidencial(formatTelefone(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CELULAR</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel" value={celular} onChange={(e) => setCelular(formatCelular(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº BANCO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={numeroBanco} onChange={(e) => setNumeroBanco(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BANCO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={banco} onChange={(e) => setBanco(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">AGÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={agencia} onChange={(e) => setAgencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº CONTA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={conta} onChange={(e) => setConta(e.target.value)}/>
                </div>
                <div><p className="hidden"></p></div>
                <div><p className="hidden"></p></div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CONTATO/RESPOSÁVEL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CARGO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cargo} onChange={(e) => setCargo(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL.</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel" value={telefoneResponsavel} onChange={(e) => setTelefoneResponsavel(formatCelular(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ENDEREÇO CORRESPONDÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={enderecoCorrespondencia} onChange={(e) => setEnderecoCorrespondencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={numeroCorrespondencia} onChange={(e) => setNumeroCorrespondencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">COMPLEMENTO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={complementoCorrespondencia} onChange={(e) => setComplementoCorrespondencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CEP</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cepCorrespondencia} onChange={(e) => setCepCorrespondencia(formatCEP(e.target.value))}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BAIRRO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={bairroCorrespondencia} onChange={(e) => setBairroCorrespondencia(e.target.value)}/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CIDADE</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text" value={cidadeCorrespondencia} onChange={(e) => setCidadeCorrespondencia(e.target.value)}/>
                </div>
            </form>
        </>
    )
}

// tenho que colocar as opções de contrato (contrato social, requerimento de empresário, MEI)