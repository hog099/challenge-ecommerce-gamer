import React from 'react';
import Link from 'next/link';
import clsx from 'clsx'
import { ThemeContext } from '../contexts/ThemeContext'
import { CartContext } from '../contexts/CartContext'

import styles from '../styles/components/Header.module.css'

const Header: React.FC = () => {
  const { theme } = React.useContext(ThemeContext)
  const { items, subtotal, shipping, total } = React.useContext(CartContext);

  return (
    <div className={clsx(styles.container, styles.lightMode)}>
      <div className={styles.containerleft}>
        <img src="logo.svg" className={styles.logo} />
        <Link href="/">
          <h3 className={clsx(styles.title,styles.textdarkMode)}>GameStore</h3>
        </Link>
      </div>
      <div className={styles.containerright}>
        <Link href="/cart">
          <img src="assets/cart-icon.svg" className={styles.iconcart} />
        </Link>

        {items.length > 0 &&
          <span className={styles.badgecart}>
            <p className={styles.textbadge}>
              {items.length}
            </p>
          </span>
        }

      </div>
    </div>
  );
}

export default Header;