import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
    setErroEmail(false);
    if (email === 'kleysonmorais' && senha === 'admin') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push('/formularios');
      }, 2000);
    } else {
      setErroEmail(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>App CNT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-login" />
      {loading && (
        <div className="loading">
          <div className="animate-bounce text-white">...</div>
        </div>
      )}
      <main className={styles.main}>
        <div className="flex items-center flex-col">
          <label className="font-bold text-2xl" style={{ color: '#10386c' }}>
            Pesquisa
          </label>
          <img src="../imgs/logoCNT.png" />
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-10">
          <TextField
            className="w-full"
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
            id="input-with-icon-textfield"
            label="Login"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            className="w-full"
            type="password"
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
            id="input-with-icon-textfield"
            label="Senha"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex flex-col items-center my-16 w-full">
          <button
            className="my-5 bg-white font-bold py-2 px-4 rounded w-3/4"
            style={{ color: '#10386C' }}
            onClick={() => logar()}
          >
            Entrar
          </button>

          <button className="my-5 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded w-3/4">
            Esqueci a senha
          </button>
        </div>
      </main>
    </div>
  );
}
