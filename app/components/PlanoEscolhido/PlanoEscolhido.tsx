'use client'

import { useEffect, useState } from "react"
import { formatValor } from "../Format/Format";

interface PlanoProps {
    setInputsPlano: (inputs: any) => void;
}

export default function PlanoEscolhido({ setInputsPlano }: PlanoProps) {
    const [valorPlano, setValorPlano] = useState('')
    const [valorTaxa, setValorTaxa] = useState('')
    const [valorParcela, setValorParcela] = useState('')
    const [operadora, setOperadora] = useState('')
    const [plano, setPlano] = useState('')
    const [acomodacao, setAcomodacao] = useState('')
    const [pgtoParcela, setPgtoParcela] = useState('')

    useEffect(() => {
        setInputsPlano({
            valorPlano, valorTaxa, valorParcela, operadora, plano, acomodacao, pgtoParcela
        })
    }, [valorPlano, valorTaxa, valorParcela, operadora, plano, acomodacao, pgtoParcela])


    return(
        <>
            <p className="text-center bg-blue-900 text-white text-2xl font-bold p-2">PLANO</p>
            <form className="grid grid-cols-3 gap-3 p-6 bg-white">
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DO PLANO</label>
                    <input name="input-valor-plano" className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={valorPlano} onChange={(e) => setValorPlano(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DA TAXA</label>
                    <input name="input-valor-taxa" className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={valorTaxa} onChange={(e) => setValorTaxa(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DA 1º PARCELA</label>
                    <input name="input-valor-parcela" className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={valorParcela} onChange={(e) => setValorParcela(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">OPERADORA</label>
                    <input name="operadora" className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={operadora} onChange={(e) => setOperadora(e.target.value)} />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">PLANO</label>
                    <input name="plano" className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" value={plano} onChange={(e) => setPlano(e.target.value)} />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ACOMODAÇÃO</label>
                    <select name="select-acomodacao" className="border rounded-md pl-2 w-auto h-[1.7em]" value={acomodacao} onChange={(e) => setAcomodacao(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value='enfermaria'>Enfermaria</option>
                        <option value='apartamento'>Apartamento</option>
                    </select>
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">PAGAMENTO DA 1º PARCELA</label>
                    <input name="pgto-parcela" className="border rounded-md pl-2 w-auto h-[1.7em]" type="date" value={pgtoParcela} onChange={(e) => setPgtoParcela(e.target.value)} />
                </div>
            </form>
        </>
    )
}