import Link from "next/link";

interface Props{
    url?: string;
    text: string;
    icon: JSX.Element;
    onClick?: () => void;
    className?: string

}

const MenuItem = (props: Props) => {
    const handlerLink = () => {
        return(
            <a className={`
                    flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200  ${props.className}
                `} >
                {props.icon}
                <span className={`
                    text-xs font-light 
                `} >
                    {props.text}
                </span>
            </a>
    )
    }
  return (
    
    <li onClick={props.onClick} className={`hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer`} >

        {props.url?
            (<Link href={props.url} >
                {handlerLink()}
            </Link>):
            (handlerLink())        
        }
    </li>

  )
}

export default MenuItem;