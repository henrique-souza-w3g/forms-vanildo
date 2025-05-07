'use client'

import { useEffect, useState } from "react"
import { formatCPF } from "../Format/Format"



export default function Vendedor({ setInputsVendedor }: { setInputsVendedor: (inputs: any) => void}) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [motivoVenda, setMotivoVenda] = useState('')
    const [dtVenda, setDtVenda] = useState('')
    const [dtEnvio, setDtEnvio] = useState('')
    const [emailVendedor, setEmailVendedor] = useState('')

    useEffect(() => {
        setInputsVendedor({
            nome, cpf, motivoVenda, dtVenda, dtEnvio, emailVendedor
        })
    }, [nome, cpf, motivoVenda, dtVenda, dtEnvio, emailVendedor, setInputsVendedor])
    
    return (
        <div id="vendedor">
        <p className="title vendedor text-center rounded-t-md text-2xl font-bold p-2">VENDEDOR</p>
        <form className="forms vendedor grid grid-cols-2 gap-3 p-6 text-base">
            <div className="nome grid w-[50%] h-20">
                <label className="font-bold mr-1">NOME</label>
                <input name="input-nome-vendedor" className="border rounded-md w-auto" type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className="grid w-[50%] h-20">
                <label className="font-bold mr-1">CPFº</label>
                <input name="input-cpf-vendedor" className="border rounded-md w-auto" placeholder="000.000.000-00" type="text" value={cpf} onChange={(e) => setCpf(formatCPF(e.target.value))}/>
            </div>
            <div className="grid w-[50%] h-20">
                <label className="font-bold mr-1">EMAIL VENDEDOR</label>
                <input name="input-emailVendedor-vendedor" className="border rounded-md w-auto" type="emailVendedor" value={emailVendedor} onChange={(e) => setEmailVendedor(e.target.value)}/>
            </div>
            <div className="grid w-[50%] h-20">
                <label className="font-bold mr-1">MOTIVO VENDA</label>
                <select name="select-motivo-venda" className="border rounded-md w-auto" value={motivoVenda} onChange={(e) => setMotivoVenda(e.target.value)}>
                    <option value=''>Selecionar</option>
                    <option value='VP'>VP</option>
                    <option value='PROSPECT'>Prospect</option>
                    <option value='INDIC'>Indic</option>
                </select>
            </div>
            <div className="grid w-[50%] h-20">
                <label className="font-bold mr-1">DATA VENDA</label>
                <input className="border rounded-md w-auto" type="date" value={dtVenda} onChange={(e) => setDtVenda(e.target.value)}/>
            </div>
            <div className="grid w-[50%] h-20">
                <label className="font-bold mr-1">DATA ENVIO DO CONTRATO</label>
                <input className="border rounded-md w-auto" type="date" value={dtEnvio} onChange={(e) => setDtEnvio(e.target.value)}/>
            </div>
        </form>
        </div>
    )
}