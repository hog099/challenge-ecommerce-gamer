import React from 'react';

import styles from '../styles/components/Header.module.css'

const Header: React.FC = () => {

  return (
    <div className={styles.container}>
    <div className={styles.containerleft}>
        <img src="/logo.svg" className={styles.logo} />
        <h3 className={styles.title}>GameStore</h3>
    </div>
    <div className={styles.containerright}>
        <p>GameStore</p>
    </div>
    </div>
  );
}

export default Header;