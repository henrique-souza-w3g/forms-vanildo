'use client'

import { use, useEffect, useState } from "react"



export default function Vendedor({ setInputsVendedor, setCompleteVendedor }: { setInputsVendedor: (inputs: any) => void, setCompleteVendedor : (complete : boolean) => void }) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [motivoVenda, setMotivoVenda] = useState('')
    const [dtVenda, setDtVenda] = useState('')
    const [dtEnvio, setDtEnvio] = useState('')

    useEffect(() => {
        setInputsVendedor({
            nome, cpf, motivoVenda, dtVenda, dtEnvio
        })
    }, [nome, cpf, motivoVenda, dtVenda, dtEnvio, setInputsVendedor])

    useEffect(() => {
        if (nome && cpf && motivoVenda && dtVenda && dtEnvio) {
            setCompleteVendedor(true)
        }
        else {
            setCompleteVendedor(false)
        }
    }, [nome, cpf, motivoVenda, dtVenda, dtEnvio, setCompleteVendedor])
    const formatCPF = (value: string) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número
        value = value.replace(/^(\d{3})(\d)/, "$1.$2");
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
        return value.substring(0, 14); // Garante que não passe do limite
    };
    
    return (
        <>
        <p className="text-center bg-blue-900 rounded-t-md text-white text-2xl font-bold p-2">VENDEDOR</p>
        <form className="grid grid-cols-2 gap-3 border-b-2 p-6 bg-white text-base">
            <div className="nome grid w-[50%]">
                <label className="font-bold mr-1">NOME:</label>
                <input name="input-nome-vendedor" className="border rounded-md w-auto pl-2" type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">CPFº</label>
                <input name="input-cpf-vendedor" className="border rounded-md w-auto pl-2" placeholder="000.000.000-00" type="text" value={cpf} onChange={(e) => setCpf(formatCPF(e.target.value))}/>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">MOTIVO VENDA</label>
                <select name="select-motivo-venda" className="border rounded-md pl-1 w-auto" value={motivoVenda} onChange={(e) => setMotivoVenda(e.target.value)}>
                    <option value=''>Selecionar</option>
                    <option value='vp'>VP</option>
                    <option value='prospect'>Prospect</option>
                    <option value='indic'>Indic</option>
                </select>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">DATA VENDA</label>
                <input className="border rounded-md w-auto pl-1" type="date" value={dtVenda} onChange={(e) => setDtVenda(e.target.value)}/>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">DATA ENVIO DO CONTRATO</label>
                <input className="border rounded-md w-auto pl-1" type="date" value={dtEnvio} onChange={(e) => setDtEnvio(e.target.value)}/>
            </div>
        </form>
        </>
    )
}