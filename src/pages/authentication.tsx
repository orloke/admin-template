import Image from 'next/image';
import React, { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconGoogle } from '../components/icons';

// import { Container } from './styles';

const Authentication = () => {

    const [mode, setModo] = useState<'login'| 'register'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const changeMode = () => {

      if (mode === 'login') {
        console.log('logar');       
      }else{
        console.log('Cadastrar');
        
      }

    }

  return (
    <div className='flex h-screen items-center justify-center' >
      <div className='bg-blue-500 w-1/2 h-screen relative'>
        <Image src="http://source.unsplash.com/random" alt="Imagem tela de autenticação" layout='fill' />
      </div>
      <div className='w-1/2' >
        <h1 className={`
          text-xl font-bold mb-5
        `} >
          {mode === 'login' ? 'Entre com a Sua Conta': 'Cadastre-se na Plataforma'}
        </h1>
        <AuthInput
            label='Email'
            value={email}
            onChange={setEmail}
            type = 'email'
            
        />
        <AuthInput
            label='Senha'
            value={senha}
            onChange={setSenha}
            type = 'password'
            
        />

        <button onClick={changeMode} className = {`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `} >
          {mode === 'login' ? 'Entrar':'Cadastrar'}
        </button>

        <hr className = {`my-6 border-gray-300 w-full`} />

        <button onClick={changeMode} className = {`
          flex justify-center items-center
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `} >
          Entrar com o Google
          {IconGoogle}
        </button>

      </div>
    </div>
  );
}

export default Authentication