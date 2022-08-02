import { createContext, useState } from "react";

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
        setTema(tema === ''? 'dark' : '')        
    }
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