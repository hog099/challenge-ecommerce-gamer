import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'
import { ThemeContext } from '../contexts/ThemeContext'

import styles from '../styles/components/Catalogo.module.css'

const Catalogo: React.FC = () => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <div className={clsx(styles.container, theme != 'light-mode' ? styles.lightMode : styles.darkMode)}>
     <p>Catalogo aqui</p>
    </div>
  );
}

export default Catalogo;