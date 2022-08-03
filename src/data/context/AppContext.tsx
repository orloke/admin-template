import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    tema?: string;
    changeThema?: () => void
}

interface Props{
    children?: React.ReactNode;
}

const AppContext = createContext<AppContextProps>({})


export function AppProvider (props: Props){

    const [tema, setTema] = useState('')

    const changeThema = () => {
        const newThema = tema === ''? 'dark' : ''
        setTema(newThema)
        localStorage.setItem('thema', newThema)        
    }

    useEffect(()=>{
        const takeThema = localStorage.getItem('thema')
        setTema(takeThema as string)
    },[])

    return (
        <AppContext.Provider value = {{
            tema,
            changeThema
        }} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;