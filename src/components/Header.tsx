import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'
import { ThemeContext } from '../contexts/ThemeContext'

import styles from '../styles/components/Header.module.css'

const Header: React.FC = () => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <div className={clsx(styles.container, theme != 'light-mode' ? styles.lightMode : styles.darkMode)}>
      <div className={styles.containerleft}>
        <img src="/logo.svg" className={styles.logo} />
        <h3 className={clsx(styles.title, theme === 'light-mode' ? styles.textlightMode : styles.textdarkMode)}>GameStore</h3>
      </div>
      <div className={styles.containerright}>
        <Link href="/cart">
          <img src="/assets/cart-icon.svg" className={styles.iconcart} />
        </Link>
      </div>
    </div>
  );
}

export default Header;