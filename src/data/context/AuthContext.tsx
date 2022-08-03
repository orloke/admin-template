import Router from 'next/router';
import { createContext, useState } from 'react';
import firebase from '../../firebase/config'
import User from '../../types/User';

interface AuthContextProps{
    user?: User;
    loginGoogle?: ()=>Promise<void>
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

    const loginGoogle = async () => {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        //@ts-ignore
        if (resp.user?.email) {
            const user = await normalizedUser(resp.user)
            console.log(user);
            
            setUser(user)
            Router.push('/')
            
        }
        
    }

  return (
    <AuthContext.Provider value={{
        user,
        loginGoogle
    }}>

        {props.children}

    </AuthContext.Provider>
  )
}

export default AuthContext