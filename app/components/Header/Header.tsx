import Image from "next/image"

export const Header = () => {
    return (
        <header className="flex justify-between items-center">
            <Image src="/4_0_Consultoria.png" width={200} height={100} alt="Logo da Consultoria" />
            <p className="text-2xl font-bold text-center">Preenchimento do Contrato PME</p>
        </header>
    )
}