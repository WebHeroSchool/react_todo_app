import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.footer}>
    <div className={styles.unfulfilled}>Невыполненно: {count} </div>
    <ul className={styles.menu}>
        <li>Все</li>
        <li>Выполнено</li>
        <li>Невыполненно</li>
    </ul>
    <div>Удалить выполненные</div>
</div>);

export default Footer;