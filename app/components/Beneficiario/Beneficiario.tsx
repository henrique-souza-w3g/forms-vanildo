import React from "react"

export default function Beneficiario({ children }: {children : React.ReactNode}) {
    return (
        <>
        <p className="text-center bg-blue-900 text-white text-2xl font-bold p-2">{children}</p>
        <form className="grid grid-cols-3 gap-3 border-b-2 p-4 bg-white rounded-b-md">
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">NOME</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" />
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">CPF</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" />
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">RG</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" />
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">DATA NASCIMENTO</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="date" />
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">IDADE</label>
                <input className="border rounded-md pl-2 w-auto h-[1.7em]" type="text" />
            </div>
            <div className="grid w-[70%]">
            <label className="font-bold mr-2">ESTADO CIVIL</label>
            <select className="border rounded-md pl-2 w-auto">
                <option value="0">Selecionar</option>
                <option value="solteiro">Solteiro</option>
                <option value="casado">Casado</option>
                <option value="divorciado">Divorciado</option>
                <option value="viuvo">Viúvo</option>
            </select>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">Nº CARTÃO SUS</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">DECLAR. NASCIDO VIVO</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">NOME DA MÃE</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">ALTURA</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold mr-2">PESO</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">POSSUI DOENÇA PRÉ-EXISTENTE</label>
                <select className="border rounded-md pl-2 w-auto">
                    <option value="0">Selecionar</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">ENDEREÇO</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">Nº</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">COMPLEMENTO</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">BAIRRO</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CIDADE</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CEP</label>
                <input className="border rounded-md pl-2 w-auto" type="text"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">TEL. RESIDENCIAL</label>
                <input className="border rounded-md pl-2 w-auto" type="tel"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">TEL. COMERCIAL</label>
                <input className="border rounded-md pl-2 w-auto" type="tel"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">CELULAR</label>
                <input className="border rounded-md pl-2 w-auto" type="tel"/>
            </div>
            <div className="grid w-[70%]">
                <label className="font-bold">INFORMAÇÕES ADICIONAIS</label>
                <textarea className="border rounded-md pl-2 w-auto" placeholder="Opcional" />
            </div>
        </form>
        </>
    )
}