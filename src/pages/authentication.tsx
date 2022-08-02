import React, { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

// import { Container } from './styles';

const Authentication = () => {

    const [mode, setModo] = useState<'login'| 'register'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

  return (
    <div>
        <h1>Autenticação</h1>
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
    </div>
  );
}

export default Authentication