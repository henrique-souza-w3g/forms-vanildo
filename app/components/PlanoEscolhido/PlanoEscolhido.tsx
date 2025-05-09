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
        <div id="plano">
            <p className="title plano text-center text-2xl font-bold p-2">PLANO</p>
            <form className="forms plano grid grid-cols-3 gap-3 p-6">
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">VALOR DO PLANO</label>
                    <input name="input-valor-plano" className="border rounded-md w-auto" type="text" value={valorPlano} onChange={(e) => setValorPlano(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">VALOR DA TAXA</label>
                    <input name="input-valor-taxa" className="border rounded-md w-auto" type="text" value={valorTaxa} onChange={(e) => setValorTaxa(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">VALOR DA 1º PARCELA</label>
                    <input name="input-valor-parcela" className="border rounded-md w-auto" type="text" value={valorParcela} onChange={(e) => setValorParcela(formatValor(e.target.value))} />
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">OPERADORA</label>
                    <input name="operadora" className="border rounded-md w-auto" type="text" value={operadora} onChange={(e) => setOperadora(e.target.value)} />
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">PLANO</label>
                    <input name="plano" className="border rounded-md w-auto" type="text" value={plano} onChange={(e) => setPlano(e.target.value)} />
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">ACOMODAÇÃO</label>
                    <select name="select-acomodacao" className="border rounded-md w-auto" value={acomodacao} onChange={(e) => setAcomodacao(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value='Enfermaria'>Enfermaria</option>
                        <option value='Apartamento'>Apartamento</option>
                    </select>
                </div>
                <div className="grid w-[70%] h-20">
                    <label className="font-bold mr-2">PAGAMENTO DA 1º PARCELA</label>
                    <input name="pgto-parcela" className="border rounded-md w-auto" type="date" value={pgtoParcela} onChange={(e) => setPgtoParcela(e.target.value)} />
                </div>
            </form>
        </div>
    )
}