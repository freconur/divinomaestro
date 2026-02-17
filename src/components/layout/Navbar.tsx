"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: '/', label: 'Inicio' },
        { href: '/nosotros', label: 'Nosotros' },
        { href: '/propuesta-educativa', label: 'Propuesta' },
        { href: '/admisiones', label: 'Admisiones' },
        { href: '/contacto', label: 'Contacto' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span>DM</span> Divino Maestro
            </div>

            {/* Desktop Menu */}
            <ul className={styles.navLinks}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={styles.desktopCta}>
                <Link href="/admisiones" className={styles.cta}>
                    Matrícula 2026
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                className={styles.mobileToggle}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/admisiones" className={styles.mobileCta} onClick={closeMenu}>
                        Matrícula 2026
                    </Link>
                </div>
            </div>
        </nav>
    );
}
