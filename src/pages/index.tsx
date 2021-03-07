import React from 'react'
import styles from '../styles/pages/Home.module.css'

import Home from './home/index';

export default function App() {

  return (
    <div className={styles.lightMode}>
     <Home />
    </div>
  )
}
