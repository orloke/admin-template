import Image from 'next/image';
import React, { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconGoogle, IconWarning } from '../components/icons';
import useAuth from '../data/hooks/useAuth';

// import { Container } from './styles';

const Authentication = () => {

  const { loginGoogle, loginEmail, register} = useAuth()

    const [mode, setMode] = useState<'login'| 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const showError = (msg = '', time = 5 ) => {
      setError(msg)
      setTimeout(() => setError(''), time * 1000)
    }

    const submit = async () => {
      try{
        if (mode === 'login' && loginEmail) {
          
          await loginEmail(email, password)

        }else if(register){
      
          await register(email, password)    
          
        }

      }catch(e: any){
        
        setError(e?.message ?? 'Erro desconhecido!')
        
      }

    }

  return (
    <div className='flex h-screen items-center justify-center' >

      <div className='w-1/2 h-screen hidden md:block lg:w-2/3 bg-cover bg-center'  style={{backgroundImage:'url(http://source.unsplash.com/random)'}}>

      </div>

      <div className='w-full mx-10 md:w-1/2 lg:w-1/3' >
        <h1 className={`
          text-3xl font-bold mb-5 max-h-screen
        `} >
          {mode === 'login' ? 'Entre com a Sua Conta': 'Cadastre-se na Plataforma'}
        </h1>

        {error ? (
          <div className='bg-red-400 text-white py-3 px-5 my-2 flex items-center border border-red-700 rounded-lg' >
            {IconWarning(6)}
            <span className='ml-2' >{error}</span>
          </div>
        ): false}


        <AuthInput
            label='Email'
            value={email}
            onChange={setEmail}
            type = 'email'
            
        />
        <AuthInput
            label='Senha'
            value={password}
            onChange={setPassword}
            type = 'password'
            
        />

        <button onClick={submit} className = {`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `} >
          {mode === 'login' ? 'Entrar':'Cadastrar'}
        </button>

        <hr className = {`my-6 border-gray-300 w-full`} />

        <button onClick={loginGoogle} className = {`
          flex justify-center items-center
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `} >
          {mode === 'login'? 'Entrar com o Google': 'Se cadastre com o Google' }
          {IconGoogle}

        </button>

        {mode === 'login' ? (
          <p className='mt-8' >
            Novo por aqui? 
              <a onClick={() => setMode('register')}
                className = {`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
              > Crie sua conta gratuitamente</a>            
          </p>
        ):(
          <p className='mt-8' >
            Já possui conta?
              <a onClick={() => setMode('login')}
                className = {`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
              > Login!</a>            
          </p>
        )}

      </div>
    </div>
  );
}

export default Authentication