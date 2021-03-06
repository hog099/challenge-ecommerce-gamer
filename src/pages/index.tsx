import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/pages/Home.module.css'

import Home from './home/index';

interface AppProps {
  theme: 'light-mode' | 'dark-mode';
  checked: boolean;
}

export default function App(props: AppProps) {
  const { theme } = React.useContext(ThemeContext)

  return (
    <div className={theme != 'light-mode' ? styles.lightMode : styles.darkMode}>
     <Home props={props}/>
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
