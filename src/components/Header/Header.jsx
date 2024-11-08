import React from 'react';
import styles from './Header.module.css';

const Header = ({ firstName, lastName }) => {
    return (
        <header className={styles.header}>
            <h1>{firstName}{lastName}</h1>
        </header>
    );
};

export default Header;