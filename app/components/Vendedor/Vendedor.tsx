'use client'

import { useState } from "react"

export default function Vendedor() {
    const [input, setInput] = useState('')

    const formatCPF = (value: string) => {
        value = value.replace(/\D/g, ""); // Remove tudo que não é número
        value = value.replace(/^(\d{3})(\d)/, "$1.$2");
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1-$2");
        return value.substring(0, 14); // Garante que não passe do limite
    };
    return (
        <>
        <h1 className="text-center bg-blue-900 rounded-t-md text-white text-2xl font-bold">VENDEDOR</h1>
        <form className="grid grid-cols-2 gap-3 border-b-2 p-4 bg-white text-base">
            <div className="nome grid w-[50%]">
                <label className="font-bold mr-1">NOME:</label>
                <input className="border rounded-md w-auto pl-2" type="text" placeholder="Nome" />
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">CPFº</label>
                <input className="border rounded-md w-auto pl-2" placeholder="CPF" type="text" value={input} onChange={(e) => setInput(formatCPF(e.target.value))}/>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">MOTIVO VENDA</label>
                <select className="border rounded-md pl-1 w-auto">
                    <option value='0'>Selecionar</option>
                    <option value='1'>VP</option>
                    <option value='2'>Prospect</option>
                    <option value='3'>Indic</option>
                </select>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">DATA VENDA</label>
                <input className="border rounded-md w-auto pl-1" type="date"/>
            </div>
            <div className="grid w-[50%]">
                <label className="font-bold mr-1">DATA ENVIO DO CONTRATO</label>
                <input className="border rounded-md w-auto pl-1" type="date"/>
            </div>
        </form>
        </>
    )
}