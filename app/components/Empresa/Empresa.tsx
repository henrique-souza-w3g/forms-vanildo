'use client'

import { useState } from "react";

export default function() {
    const [empresa, setEmpresa] = useState('');
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
    return (
        <>
            <p className="text-center bg-blue-900 text-white text-2xl font-bold p-2">EMPRESA</p>
            <form className="grid grid-cols-3 gap-3 border-b-2 p-6 bg-white">
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CNPJ</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" placeholder="00.000.000/0000-00" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VIDAS</label>
                    <select className="border rounded-md pl-2 w-auto">
                        <option value="0">Selecionar</option>
                        <option value="1">2 a 29 vidas</option>
                        <option value="2">30 a 99 vidas</option>
                    </select>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VIGÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="date"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">RAZÃO SOCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" placeholder="Nome Empresa LTDA" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ENDEREÇO CNPJ</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">COMPLEMENTO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CEP</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BAIRRO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CIDADE</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">EMAIL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="email"/>
                </div>
                <br />
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL. COMERCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL. RESIDENCIAL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CELULAR</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº BANCO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BANCO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">AGÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº CONTA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div><p className="hidden"></p></div>
                <div><p className="hidden"></p></div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CONTATO/RESPOSÁVEL</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CARGO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">TEL.</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="tel"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ENDEREÇO CORRESPONDÊNCIA</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">Nº</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">COMPLEMENTO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CEP</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">BAIRRO</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">CIDADE</label>
                    <input className="border rounded-md w-auto h-[1.7em] pl-2" type="text"/>
                </div>
            </form>
        </>
    )
}

// tenho que colocar as opções de contrato (contrato social, requerimento de empresário, MEI)