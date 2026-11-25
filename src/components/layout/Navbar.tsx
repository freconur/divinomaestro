"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, ArrowRight, Phone, ArrowUpRight, Sparkles, Monitor, MapPin } from 'lucide-react';
import styles from './Navbar.module.css';

interface NavbarProps {
    isScrolled?: boolean;
}

export default function Navbar({ isScrolled = false }: NavbarProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<'niveles' | 'matricula' | null>(null);
    const nivelesRef = useRef<HTMLLIElement>(null);
    const matriculaRef = useRef<HTMLLIElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const clearDropdownTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    const handleMouseEnter = (menu: 'niveles' | 'matricula') => {
        clearDropdownTimeout();
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        clearDropdownTimeout();
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 220);
    };

    const closeDropdownImmediately = useCallback(() => {
        clearDropdownTimeout();
        setActiveDropdown(null);
    }, [clearDropdownTimeout]);

    const toggleDropdown = (menu: 'niveles' | 'matricula') => {
        clearDropdownTimeout();
        setActiveDropdown((prev) => (prev === menu ? null : menu));
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = useCallback(() => {
        clearDropdownTimeout();
        setIsMenuOpen(false);
        setActiveDropdown(null);
    }, [clearDropdownTimeout]);

    // Clear dropdown timer on unmount
    useEffect(() => {
        return () => {
            clearDropdownTimeout();
        };
    }, [clearDropdownTimeout]);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeMenu]);

    // Close desktop dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            const inNiveles = nivelesRef.current && nivelesRef.current.contains(target);
            const inMatricula = matriculaRef.current && matriculaRef.current.contains(target);
            if (!inNiveles && !inMatricula) {
                closeDropdownImmediately();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [closeDropdownImmediately]);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const levels = [
        { href: '/propuesta-educativa/inicial', label: 'Inicial', desc: '3, 4 y 5 años' },
        { href: '/propuesta-educativa/primaria', label: 'Primaria', desc: '1° a 6° grado' },
        { href: '/propuesta-educativa/secundaria', label: 'Secundaria', desc: '1° a 5° año' },
    ];

    const LEVEL_CARDS = [
        {
            id: 'inicial',
            level: 'Inicial',
            badge: 'Educación Inicial',
            badgeClass: styles.badgeInicial,
            overlayClass: styles.overlayInicial,
            description: 'Propuesta pedagógica lúdica y estimulación temprana en un ambiente cálido y seguro.',
            image: '/level_inicial.png',
            href: '/propuesta-educativa/inicial',
        },
        {
            id: 'primaria',
            level: 'Primaria',
            badge: 'Educación Primaria',
            badgeClass: styles.badgePrimaria,
            overlayClass: styles.overlayPrimaria,
            description: 'Aprendizaje activo con apoyo de tecnología, razonamiento lógico y trabajo en equipo.',
            image: '/level_primaria.png',
            href: '/propuesta-educativa/primaria',
        },
        {
            id: 'secundaria',
            level: 'Secundaria',
            badge: 'Educación Secundaria',
            badgeClass: styles.badgeSecundaria,
            overlayClass: styles.overlaySecundaria,
            description: 'Preparación académica preuniversitaria, dominio del inglés y liderazgo con valores.',
            image: '/level_secundaria.png',
            href: '/propuesta-educativa/secundaria',
        },
    ];

    const isPropuestaActive = pathname.startsWith('/propuesta-educativa');
    const isMatriculaActive = pathname.startsWith('/admisiones') || pathname.startsWith('/matricula-2027');

    return (
        <>
            <nav
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
                aria-label="Navegación principal"
            >
            <div className={styles.container}>
                {/* Brand Logo with Official Crest */}
                <Link
                    href="/"
                    className={styles.logoLink}
                    onClick={closeMenu}
                    aria-label="Divino Maestro de Pamplona - Inicio"
                >
                    <div className={styles.logoImgWrapper}>
                        <Image
                            src="/logo.svg"
                            alt="Escudo Divino Maestro de Pamplona"
                            width={38}
                            height={49}
                            priority
                            className={styles.logoImg}
                        />
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoMain}>DIVINO MAESTRO</span>
                        <span className={styles.logoSub}>DE PAMPLONA</span>
                    </div>
                </Link>

                {/* Desktop Menu Links */}
                <ul className={styles.navLinks}>
                    <li>
                        <Link
                            href="/"
                            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
                            aria-current={pathname === '/' ? 'page' : undefined}
                            onMouseEnter={closeDropdownImmediately}
                        >
                            Inicio
                        </Link>
                    </li>

                    {/* Propuesta Dropdown */}
                    <li
                        className={styles.dropdownItem}
                        ref={nivelesRef}
                        onMouseEnter={() => handleMouseEnter('niveles')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            type="button"
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${isPropuestaActive ? styles.active : ''} ${activeDropdown === 'niveles' ? styles.dropdownActive : ''}`}
                            onClick={() => toggleDropdown('niveles')}
                            aria-expanded={activeDropdown === 'niveles'}
                            aria-controls="propuesta-dropdown-menu"
                        >
                            <span>Niveles +</span>
                        </button>

                        {/* Niveles+ Mega Dropdown Menu */}
                        <div
                            id="propuesta-dropdown-menu"
                            className={`${styles.megaMenu} ${activeDropdown === 'niveles' ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => handleMouseEnter('niveles')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.megaGrid}>
                                {LEVEL_CARDS.map((card) => (
                                    <Link
                                        key={card.id}
                                        href={card.href}
                                        className={styles.levelCard}
                                        onClick={closeDropdownImmediately}
                                    >
                                        <div className={styles.cardImageWrapper}>
                                            <Image
                                                src={card.image}
                                                alt={card.badge}
                                                fill
                                                sizes="(max-width: 1200px) 300px, 320px"
                                                className={styles.cardImage}
                                            />
                                            <div className={`${styles.cardOverlay} ${card.overlayClass}`} />

                                            <div className={styles.cardArrow}>
                                                <ArrowUpRight size={18} />
                                            </div>

                                            <div className={styles.cardContent}>
                                                <span className={`${styles.cardBadge} ${card.badgeClass}`}>
                                                    {card.badge}
                                                </span>
                                                <p className={styles.cardDesc}>
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.megaFooter}>
                                <div className={styles.megaFooterInfo}>
                                    <Sparkles size={16} className={styles.megaFooterIcon} />
                                    <span>Formación integral 360° con sólidos valores y excelencia académica</span>
                                </div>
                                <Link
                                    href="/propuesta-educativa"
                                    className={styles.megaFooterLink}
                                    onClick={closeDropdownImmediately}
                                >
                                    <span>Ver Propuesta Educativa Completa</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </li>

                    {/* Matricúlate ahora Dropdown */}
                    <li
                        className={styles.dropdownItem}
                        ref={matriculaRef}
                        onMouseEnter={() => handleMouseEnter('matricula')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            type="button"
                            className={`${styles.navLink} ${styles.dropdownTrigger} ${isMatriculaActive ? styles.active : ''} ${activeDropdown === 'matricula' ? styles.dropdownActive : ''}`}
                            onClick={() => toggleDropdown('matricula')}
                            aria-expanded={activeDropdown === 'matricula'}
                            aria-controls="matricula-dropdown-menu"
                        >
                            <span>Matricúlate ahora +</span>
                        </button>

                        {/* Matricula Mega Dropdown Menu */}
                        <div
                            id="matricula-dropdown-menu"
                            className={`${styles.megaMenu} ${styles.matriculaMenu} ${activeDropdown === 'matricula' ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => handleMouseEnter('matricula')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.matriculaGrid}>
                                {/* Card 1: Visita Guiada Virtual */}
                                <Link
                                    href="/admisiones"
                                    className={styles.visitCard}
                                    onClick={closeDropdownImmediately}
                                >
                                    <div className={styles.visitImageWrapper}>
                                        <Image
                                            src="/admissions_bg.png"
                                            alt="Visita Guiada Virtual Divino Maestro"
                                            fill
                                            sizes="(max-width: 1200px) 300px, 340px"
                                            className={styles.visitImage}
                                        />
                                        <div className={`${styles.visitOverlay} ${styles.visitOverlayCyan}`} />
                                        
                                        <div className={styles.visitArrow}>
                                            <ArrowUpRight size={18} />
                                        </div>

                                        <div className={styles.visitContent}>
                                            <div className={styles.visitBadgeHeader}>
                                                <div className={styles.visitTitleGroup}>
                                                    <div className={styles.visitMainWord}>
                                                        <span>Visita</span>
                                                        <div className={styles.visitIconBox}>
                                                            <Monitor size={17} strokeWidth={2.3} />
                                                        </div>
                                                    </div>
                                                    <span className={styles.visitSubWord}>Guiada</span>
                                                    <span className={styles.visitTypeWord}>Virtual</span>
                                                </div>
                                            </div>
                                            <p className={styles.visitDesc}>
                                                Explore nuestro modelo educativo desde cualquier lugar.
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                {/* Card 2: Visita Guiada Presencial */}
                                <Link
                                    href="/admisiones"
                                    className={styles.visitCard}
                                    onClick={closeDropdownImmediately}
                                >
                                    <div className={styles.visitImageWrapper}>
                                        <Image
                                            src="/school_hero_bg.png"
                                            alt="Visita Guiada Presencial Divino Maestro"
                                            fill
                                            sizes="(max-width: 1200px) 300px, 340px"
                                            className={styles.visitImage}
                                        />
                                        <div className={`${styles.visitOverlay} ${styles.visitOverlayNavy}`} />

                                        <div className={styles.visitArrow}>
                                            <ArrowUpRight size={18} />
                                        </div>

                                        <div className={styles.visitContent}>
                                            <div className={styles.visitBadgeHeader}>
                                                <div className={styles.visitTitleGroup}>
                                                    <div className={styles.visitMainWord}>
                                                        <span>Visita</span>
                                                        <div className={styles.visitIconBox}>
                                                            <MapPin size={17} strokeWidth={2.3} />
                                                        </div>
                                                    </div>
                                                    <span className={styles.visitSubWord}>Guiada</span>
                                                    <span className={styles.visitTypeWord}>Presencial</span>
                                                </div>
                                            </div>
                                            <p className={styles.visitDesc}>
                                                ¡Ven y conoce de cerca nuestra propuesta educativa!
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                {/* Column 3: Admissions CTA box */}
                                <div className={styles.admissionsCtaBox}>
                                    <h3 className={styles.admissionsTitle}>
                                        Vacantes 2027: Proceso de Admisión y Prematrícula Abierta
                                    </h3>
                                    <p className={styles.admissionsText}>
                                        No esperes al final. Participa en la prematrícula 2027 y garantiza una educación de calidad en el Colegio Divino Maestro de Pamplona.
                                    </p>
                                    <Link
                                        href="/matricula-2027"
                                        className={styles.admissionsBtn}
                                        onClick={closeDropdownImmediately}
                                    >
                                        <span>Iniciar ahora</span>
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
        </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
                aria-hidden={!isMenuOpen}
            >
                <div className={styles.drawerInner}>
                    <div className={styles.drawerHeader}>
                        <div className={styles.drawerBrand}>
                            <Image
                                src="/logo.svg"
                                alt="Escudo Divino Maestro de Pamplona"
                                width={32}
                                height={41}
                                className={styles.drawerLogoImg}
                            />
                            <div className={styles.drawerBrandText}>
                                <span className={styles.drawerBrandMain}>DIVINO MAESTRO</span>
                                <span className={styles.drawerBrandSub}>DE PAMPLONA</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className={styles.drawerCloseBtn}
                            onClick={closeMenu}
                            aria-label="Cerrar menú de navegación"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    <div className={styles.mobileNavLinks}>
                        <Link
                            href="/"
                            className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileLinkActive : ''}`}
                            onClick={closeMenu}
                        >
                            Inicio
                        </Link>

                        {/* Mobile Accordion for Propuesta / Niveles */}
                        <div className={styles.mobileSubmenuGroup}>
                            <Link
                                href="/propuesta-educativa"
                                className={`${styles.mobileLink} ${isPropuestaActive ? styles.mobileLinkActive : ''}`}
                                onClick={closeMenu}
                            >
                                Niveles +
                            </Link>
                            <div className={styles.mobileSubLinks}>
                                {levels.map((lvl) => (
                                    <Link
                                        key={lvl.href}
                                        href={lvl.href}
                                        className={`${styles.mobileSubLink} ${pathname === lvl.href ? styles.mobileSubLinkActive : ''}`}
                                        onClick={closeMenu}
                                    >
                                        <span>• Nivel {lvl.label}</span>
                                        <span className={styles.mobileSubDesc}>({lvl.desc})</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Accordion for Matricúlate ahora */}
                        <div className={styles.mobileSubmenuGroup}>
                            <Link
                                href="/admisiones"
                                className={`${styles.mobileLink} ${isMatriculaActive ? styles.mobileLinkActive : ''}`}
                                onClick={closeMenu}
                            >
                                <span>Matricúlate ahora +</span>
                                <span className={styles.mobileBadge}>Vacantes 2027</span>
                            </Link>
                            <div className={styles.mobileSubLinks}>
                                <Link
                                    href="/admisiones"
                                    className={styles.mobileSubLink}
                                    onClick={closeMenu}
                                >
                                    <span>• Admisión y Vacantes 2027</span>
                                </Link>
                                <Link
                                    href="/admisiones#visita-virtual"
                                    className={styles.mobileSubLink}
                                    onClick={closeMenu}
                                >
                                    <span>• Visita Guiada Virtual</span>
                                </Link>
                                <Link
                                    href="/admisiones#visita-presencial"
                                    className={styles.mobileSubLink}
                                    onClick={closeMenu}
                                >
                                    <span>• Visita Guiada Presencial</span>
                                </Link>
                                <Link
                                    href="/matricula-2027"
                                    className={styles.mobileSubLink}
                                    onClick={closeMenu}
                                >
                                    <span>• Iniciar Prematrícula Online</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.drawerFooter}>
                        <Link href="/matricula-2027" className={styles.drawerCta} onClick={closeMenu}>
                            <GraduationCap size={18} />
                            <span>Postular a Matrícula 2027</span>
                        </Link>

                        <a href="tel:+5112345678" className={styles.drawerPhone}>
                            <Phone size={15} />
                            <span>Central telefónica: (01) 234-5678</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Backdrop overlay for mobile */}
            {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu} />}
        </>
    );
}
