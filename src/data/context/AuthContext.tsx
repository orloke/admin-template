import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Cookie from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../types/User';

interface AuthContextProps{
    user?: User;
    loading?: boolean
    loginEmail?: (email:string, password:string) => Promise<void>
    register?: (email:string, password:string) => Promise<void>
    loginGoogle?: ()=>Promise<void>
    logout?: ()=>Promise<void>
}

interface Props{
    children?: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider = (props: Props) => {
    
    const normalizedUser = async (userFirebase: firebase.User):Promise<User> => {
        const token = await userFirebase.getIdToken()
        return {
            uid: userFirebase.uid,
            email: userFirebase.email,
            name: userFirebase.displayName,
            token,
            provider: userFirebase.providerData[0]?.providerId,
            avatar: userFirebase.photoURL            
        }
    }

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);

    
    const manageCookie = (loged:boolean) => {
        if (loged) {
            let loged =  'true'
            Cookie.set('admin-template', loged, { expires: 7})
        }
        else{
            Cookie.remove('admin-template')
        }
    }
    
    const settingSection = async (userFirebase: firebase.User | null) => {
        if (userFirebase?.email) {
            const user = await normalizedUser(userFirebase)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        }
        else{
            setUser(undefined)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }
    
    const register = async (email: string, password: string) => {

        try{
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)

            if (resp.user) {
                await settingSection(resp.user)
                Router.push('/')                
            }
        }
        finally{
            setLoading(false)
        }

    }

    const loginEmail = async (email: string, password: string) => {

        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)

            if (resp.user) {
                await settingSection(resp.user)
                Router.push('/')                
            }
        }
        finally{
            setLoading(false)
        }

    }

    const loginGoogle = async () => {

        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            ) 
            if (resp.user) {
                await settingSection(resp.user)
                Router.push('/')                
            }
        }
        finally{
            setLoading(false)
        }

    }

    const logout = async () => {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await settingSection(null)
        }finally{
            setLoading(false)

        }
    }

    useEffect(() => {
        const cancel = firebase.auth().onIdTokenChanged(settingSection as any)
        return () => cancel()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <AuthContext.Provider value={{
        user,
        loginGoogle,
        loginEmail,
        logout,
        register,
        loading
    }}>

        {props.children}

    </AuthContext.Provider>
  )
}

export default AuthContext