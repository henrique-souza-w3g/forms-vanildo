export default function PlanoEscolhido() {
    return(
        <>
            <h1 className="text-center bg-blue-900 text-white text-2xl font-bold">PLANO</h1>
            <form className="grid grid-cols-3 gap-3 border-b-2 p-4 bg-white">
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DO PLANO</label>
                    <input className="border rounded-md pl-2 w-auto" type="text" />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DA TAXA</label>
                    <input className="border rounded-md pl-2 w-auto" type="text" />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">VALOR DA 1º PARCELA</label>
                    <input className="border rounded-md pl-2 w-auto" type="text" />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">OPERADORA</label>
                    <input className="border rounded-md pl-2 w-auto" type="text" />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">PLANO</label>
                    <input className="border rounded-md pl-2 w-auto" type="text" />
                </div>
                <div className="grid w-[70%]">
                    <label className="font-bold mr-2">ACOMODAÇÃO</label>
                    <label className="ml-2">
                        <input className="mr-2" value='enfermaria' type='radio'/>Enfermaria
                    </label>
                    <label className="inline-block ml-2">
                        <input className="mr-2" value='apartamento' type="radio"/>Apartamento
                    </label>
                </div>
            </form>
        </>
    )
}