import React from 'react'
import Head from 'next/head'
import styles from '../../styles/pages/Home.module.css'

import Header from '../../components/Header'
import Catalogo from '../../components/Catalogo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      {/* O Head é do Next para personalizarmos o titulo da aplicação na aba do navegador, podendo assim em cada pagina termos um titulo diferente */}
      <Head>
        <title>GameStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <br />
        <br />
        <h3 className={styles.title}>
          A SUA LOJA DE GAMES PREFERIDA
        </h3>
        <br />
        <br />

        <Catalogo />

      </main >

    </div >
  )
}
