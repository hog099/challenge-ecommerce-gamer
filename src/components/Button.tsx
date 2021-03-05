import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext'
import clsx from 'clsx';

import styles from '../styles/components/Button.module.css'

const Button: React.FC = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <div className={styles.container}>
            <button
                className={clsx(styles.button, theme === 'light-mode' ? styles.darkMode : styles.lightMode)}
                onClick={toggleTheme}
            >
                {theme === "light-mode" ? 'Tema Escuro' : 'Tema Claro'}
            </button>
        </div>
    );

}

export default Button;