
import React from 'react';

export const PlayerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M30 38V30C30 27.7909 31.7909 26 34 26H42C44.2091 26 46 27.7909 46 30V38" fill="currentColor" stroke="#111827" strokeWidth="2"/>
    <path d="M42 26V20C42 16.6863 39.3137 14 36 14H34C31.7909 14 30 15.7909 30 18V26" fill="currentColor" stroke="#111827" strokeWidth="2"/>
    <path d="M36 14C36 12 35 10 33 10C31 10 31.5 12.5 31.5 13.5C31.5 14.5 32 15 32.5 14.5C33 14 33.5 13 34 13" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="37" cy="19" r="1.5" fill="#111827"/>
    <path d="M14 38V22C14 18.6863 16.6863 16 20 16H30V30C30 27.7909 28.2091 26 26 26H20C16.6863 26 14 28.6863 14 32V38" fill="currentColor" stroke="#111827" strokeWidth="2"/>
    <path d="M12 38V30C12 27.7909 10.2091 26 8 26H2C-0.209139 26 -2 27.7909 -2 30V38" fill="currentColor" stroke="#111827" strokeWidth="2"/>
    <path d="M36 32C36 30.8954 35.1046 30 34 30H32" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const StoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22.5 12.5C25.5 15.5 22.5 19.5 18.5 19.5H6.5C0.5 19.5 -2.5 12.5 4 7C10.5 1.5 18 -1.5 22.5 12.5Z" fill="currentColor" stroke="#1F2937" strokeWidth="2"/>
    </svg>
);

export const RickshawIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="2" y="2" width="58" height="38" rx="4" fill="#FBBF24" stroke="#000" strokeWidth="3"/>
        <rect x="2" y="40" width="76" height="12" fill="#4B5563" stroke="#000" strokeWidth="3"/>
        <path d="M60 10H72C75.3137 10 78 12.6863 78 16V40H60V10Z" fill="#3B82F6" stroke="#000" strokeWidth="3"/>
        <circle cx="16" cy="46" r="10" fill="#D1D5DB" stroke="#000" strokeWidth="3"/>
        <circle cx="64" cy="46" r="10" fill="#D1D5DB" stroke="#000" strokeWidth="3"/>
        <line x1="2" y1="20" x2="60" y2="20" stroke="#000" strokeWidth="2"/>
    </svg>
);

export const DogCatcherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 45 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="10" y="20" width="25" height="50" fill="#8B5CF6" stroke="#000" strokeWidth="2"/>
        <circle cx="22.5" cy="12.5" r="7.5" fill="#FCD34D" stroke="#000" strokeWidth="2"/>
        <line x1="1" y1="28" x2="20" y2="5" stroke="#000" strokeWidth="3"/>
        <ellipse cx="28" cy="4" rx="15" ry="4" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
    </svg>
);
