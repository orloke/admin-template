import { IconMoon, IconSun } from "./icons";

interface Props {
    thema?:string;
    changeThema?: ()=>void
}

const ButtonDarkMode= (props: Props) => {
    return props.thema === 'dark' ? (
        <div className={`
                bg-slate-50 hidden sm:flex items-center bg-gradient-to-r from-yellow-300 to-yellow-600 w-14
                lg:w-24 h-8 cursor-pointer p-1 rounded-full
            `} 
            onClick={props.changeThema} 
        >
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600
                w-6 h-6 rounded-full
            `} >
                {IconSun(4)}
            </div>
            <div className = {`
                hidden lg:flex items-center ml-4 text-white
            `}>
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ): (
        <div className={`
                hidden sm:flex items-center justify-end bg-gradient-to-r from-gray-500 to-gray-900 w-14
                lg:w-24 h-8 cursor-pointer p-1 rounded-full
            `} 
            onClick={props.changeThema} 
        >
            <div className = {`
                hidden lg:flex items-center mr-2 text-white
            `}>
                <span className="text-sm" >Escuro</span>
            </div>
            <div className={`
                flex items-center justify-center
                bg-black text-yellow-600
                w-6 h-6 rounded-full
            `} >
                {IconMoon(1)}
            </div>
        </div>
    )
}

export default ButtonDarkMode;