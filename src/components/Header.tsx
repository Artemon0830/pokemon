// src/components/Header.tsx
import React from 'react';
import { Link } from "react-router-dom";
import styles from './../css/Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.headerNav}>
                <p><Link to={'/pokemon'}>Pokemon</Link></p>
                <p><Link to={'/search'}>Search</Link></p>
                <p><Link to={'/my-favorites'}>Favorites</Link></p>
            </nav>
        </div>
    );
};

export default Header;