


export const Button = ({onClick, children, valid}: {onClick?: () => void, children: React.ReactNode, valid?: string }) => {
    return (
        <button className={`button ${valid} cursor-pointer justify-between flex rounded-md p-2 mt-2 mb-2 font-bold text-white bg-blue-900 hover:bg-blue-800 hover:text-orange-500 `} 
                onClick={onClick}>
            {children} 
        </button>
    )
}