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
        <form className="grid gap-2 mt-10 border-2 rounded-md p-5">
            <label className="pl-5">Vendedor</label>
            <input className="border rounded-md w-50 pl-2" type="text"/>
            <label className="pl-5">CPFº</label>
            <input className="border rounded-md w-50 pl-2" type="text" value={input} onChange={(e) => setInput(formatCPF(e.target.value))}/>
        </form>
    )
}