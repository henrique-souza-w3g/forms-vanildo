import Image from "next/image"

interface HeaderProps {
    id: string
}

export const Header = ({id}: HeaderProps) => {
    return (
        <header id={id} className="flex justify-between items-center ml-6 mr-6">
            <Image src="/4_0_Consultoria-removebg-preview.png" width={400} height={100} alt="Logo da 4.0 Consultoria" />
            <h1 className="header-text text-2xl font-bold">Contrato PME</h1>
        </header>
    )
}