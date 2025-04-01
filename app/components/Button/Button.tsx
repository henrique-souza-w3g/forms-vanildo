import { CirclePlus } from "lucide-react"


export const Button = ({onClick, children, valid}: {onClick?: () => void, children: React.ReactNode, valid?: string }) => {
    return (
        <button className={`button ${valid} cursor-pointer justify-between flex border rounded-md p-2 mt-2 mb-2 font-bold text-white bg-blue-900 hover:bg-blue-800`} 
                onClick={onClick}>
            {children} <CirclePlus className="ml-2" />
        </button>
    )
}