import React from 'react'
import Head from 'next/head'
import styles from '../../styles/pages/Home.module.css'

import Header from '../../components/Header'

export default function Cart() {
  return (
    <div className={styles.container}>
      <Header />
      {/* O Head é do Next para personalizarmos o titulo da aplicação na aba do navegador, podendo assim em cada pagina termos um titulo diferente */}
      <Head>
        <title>GameStore | Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Carrinho
        </h1>

      </main>

    </div>
  )
}
