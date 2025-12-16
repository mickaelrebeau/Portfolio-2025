import type { Project, Experience } from '@/types'

export const projects: Project[] = [
    {
        id: 'p1',
        title: 'Jeu Godot 2D',
        desc: 'Mon premier jeu vidéo développé avec le moteur Godot.',
        tags: ['Godot Engine', 'GDScript', 'Game Dev'],
        url: 'https://mickaelrebeau.github.io/GODOT/firstgame/index.html'
    },
    {
        id: 'p2',
        title: 'OseCulture',
        desc: 'Plateforme culturelle immersive.',
        tags: ['Web', 'Culture', 'Event'],
        url: 'https://www.oseculture.fr/'
    },
    {
        id: 'p3',
        title: 'Pixel Platform',
        desc: 'Pixel Platform est une plateforme web de dessin pixel art collaborative.',
        tags: ['Vercel', 'React', 'Design'],
        url: 'https://pixel-plateform.vercel.app/'
    },
    {
        id: 'p4',
        title: 'MeetDev',
        desc: 'Réseau social pour développeurs. Le Tinder pour les développeurs.',
        tags: ['Social', 'Networking', 'Dev'],
        url: 'https://meetdev-mike-dreeman.vercel.app/'
    },
    {
        id: 'p5',
        title: 'CV Offer Comparer',
        desc: "Outil IA pour analyser l'adéquation CV/Offre.",
        tags: ['AI', 'Parsing', 'Utility'],
        url: 'https://cv-offer-comparer-mike-dreeman.vercel.app/'
    },
    {
        id: 'p6',
        title: 'Clash of Dev',
        desc: 'Application de concours de code.',
        tags: ['Competition', 'Ranking', 'VueJS'],
        url: 'https://mike-dreeman-clash-of-dev.vercel.app/'
    },
    {
        id: 'p7',
        title: 'Design to Code',
        desc: "Challenge d'intégration HTML/CSS.",
        tags: ['Integration', 'Responsive', 'Frontend'],
        url: 'https://mickaelrebeau.github.io/Helwena-Design/'
    }
]

export const experiences: Experience[] = [
    {
        title: 'Développeur Fullstack',
        company: 'Freelance',
        period: 'Sept 2025 - Présent',
        description: 'Développement de solutions web Fullstack. Développement de CRM-ERP personnalisé.'
    },
    {
        title: 'Innovative Software Solutions Associate',
        company: 'ProductLife Group',
        period: 'Mars 2025 - Sept 2025',
        description: 'Développement de solutions web Fullstack.'
    },
    {
        title: 'Consultant Vue.js & Python',
        company: 'Bloomind',
        period: 'Mars 2024 - Mars 2025',
        description: 'Consultation et développement web Fullstack.'
    },
    {
        title: "Concepteur et Développeur d'Applications",
        company: 'Alt | Incubateur Tech',
        period: 'Avril 2023 - Sept 2023',
        description: 'Microservices, Authentification, NestJS, Ionic.'
    }
]
