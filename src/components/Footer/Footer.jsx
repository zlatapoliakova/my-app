import React from 'react';
import styles from './Footer.module.css';

const Footer = ({group}) => {
    return (
        <footer className={styles.footer}>
           <p>Group: {group}</p>
        </footer>
    );
};

export default Footer;