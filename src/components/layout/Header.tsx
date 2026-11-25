"use client";

import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <TopBar isScrolled={isScrolled} />
            <Navbar isScrolled={isScrolled} />
        </header>
    );
}
