import React, { useState } from "react";
import useAppData from "../data/hooks/useAppData";
import ButtonDarkMode from "./ButtonDrakMode";
import Content from "./Content";
import { IconMenu } from "./icons";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface Props{
    title: string;
    caption: string;
    children: React.ReactNode
}

const Layout = (props: Props) => {

    const [open, setOpen] = useState(true)

    const {tema, changeThema} = useAppData()

  return (
    <div className = {` ${tema} flex h-screen`}>
        
            <div className={`flex flex-col items-end`}>
                <div>
                    <button 
                        className={`text-3xl absolute ml-2 mt-2 dark:text-white `}
                        onClick={() => setOpen(!open)} 
                    >
                            {IconMenu}                    
                    </button>
                </div>
                <div className={`${open?'':'-ml-20 '}  ease-in-out duration-300`}>
                    <Sidebar open={open} setOpen={setOpen} />
                </div>

            </div>

        <div className="flex flex-col w-full bg-gray-400 dark:bg-gray-800 items-end" >
            <ButtonDarkMode thema={tema} changeThema={changeThema} />
            <div className={`flex flex-col h-screen w-full pt-20 sm:pt-7 pl-2   ${open?'':'pl-2'} `} >
                <TopBar title={props.title} caption={props.caption} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    </div>
  )
}

export default Layout;