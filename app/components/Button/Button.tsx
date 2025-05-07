export const Button = ({onClick, children, valid}: {onClick?: () => void, children: React.ReactNode, valid?: string }) => {
    return (
        <button className={`button ${valid} cursor-pointer justify-between flex rounded-md p-2 mt-2 mb-2 font-bold`} 
                onClick={onClick}>
            {children} 
        </button>
    )
}