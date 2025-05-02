import React, { useState } from 'react';

const LoginCadastro = () => {
  const [modo, setModo] = useState('login');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${modo === 'login' ? '🔐 Login' : '👤 Cadastro'} realizado!`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0b0f14, #1e1e2f)',
      fontFamily: "'Cinzel', serif",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#60a5fa',
        fontSize: '2.6rem',
        marginBottom: '2rem',
        borderBottom: '1px solid #60a5fa',
        paddingBottom: '0.5rem',
        textAlign: 'center'
      }}>
        Luxury Timepieces
      </h1>

      <div style={{
        background: '#111827',
        padding: '2rem',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 0 30px rgba(0,0,0,0.4)',
        color: 'white'
      }}>
        <h2 style={{ textAlign: 'center', fontWeight: 300, marginBottom: '1.5rem' }}>
          {modo === 'login' ? 'Entrar na sua conta' : 'Criar nova conta'}
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {modo === 'cadastro' && (
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={inputStyle}
            />
          )}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            {modo === 'login' ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.9rem',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          {modo === 'login' ? (
            <>Não tem conta? <span onClick={() => setModo('cadastro')} style={linkStyle}>Criar agora</span></>
          ) : (
            <>Já tem conta? <span onClick={() => setModo('login')} style={linkStyle}>Entrar</span></>
          )}
        </p>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.9rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #4b5563',
  background: '#1f2937',
  color: 'white'
};

const buttonStyle = {
  padding: '1rem',
  background: '#2563eb',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  color: 'white',
  cursor: 'pointer'
};

const linkStyle = {
  color: '#60a5fa',
  textDecoration: 'underline',
  cursor: 'pointer'
};

export default LoginCadastro;
