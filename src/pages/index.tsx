import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/pages/Home.module.css'

import Header from '../components/Header';
import Button from '../components/Button';

interface HomeProps {
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
}

export default function Home(props: HomeProps) {
  const { theme } = React.useContext(ThemeContext)


  return (
    <div className={theme != 'light-mode' ? styles.lightMode : styles.darkMode}>
      <div className={styles.container}>
        <Header />
        {/* O Head é do Next para personalizarmos o titulo da aplicação na aba do navegador, podendo assim em cada pagina termos um titulo diferente */}
        <Head>
          <title>GameStore</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello Nextjs!
        </h1>

        </main>

      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme, checked } = ctx.req.cookies
  return {
    props: {
      theme: String(theme),
      checked: checked === 'true',
    }
  }
}
