import Image from "next/image"

export const Header = () => {
    return (
        <header className="flex justify-between items-center ml-6 mr-6">
            <Image src="/4_0_Consultoria-removebg-preview.png" width={400} height={100} alt="Logo da 4.0 Consultoria" />
            <h1 className="text-2xl font-bold text-blue-900">Contrato PME</h1>
        </header>
    )
}