"use client";

import { Navigation, ExternalLink } from 'lucide-react';

interface OpenMapsButtonProps {
    className?: string;
    label?: string;
}

const SCHOOL_LAT = -12.1359793;
const SCHOOL_LNG = -76.9655498;
const DESKTOP_MAPS_URL = "https://maps.app.goo.gl/vGp98jkfsk7Gz8Py6";
const UNIVERSAL_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SCHOOL_LAT},${SCHOOL_LNG}`;
const ANDROID_GEO_URL = `geo:${SCHOOL_LAT},${SCHOOL_LNG}?q=${SCHOOL_LAT},${SCHOOL_LNG}(Colegio+Divino+Maestro+de+Pamplona)`;

export default function OpenMapsButton({
    className,
    label = "Abrir Ruta en Google Maps",
}: OpenMapsButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof navigator === 'undefined') return;
        const ua = navigator.userAgent;

        if (/android/i.test(ua)) {
            e.preventDefault();
            window.location.href = ANDROID_GEO_URL;
        } else if (/iPad|iPhone|iPod/i.test(ua)) {
            e.preventDefault();
            window.location.href = UNIVERSAL_MAPS_URL;
        }
    };

    return (
        <a
            href={DESKTOP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
        >
            <Navigation size={16} aria-hidden="true" />
            <span>{label}</span>
            <ExternalLink size={14} aria-hidden="true" />
        </a>
    );
}
