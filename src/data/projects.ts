import type { Project, Experience } from '@/types'

export const projects: Project[] = [
    {
        id: 'p1',
        tags: ['Godot Engine', 'GDScript', 'Game Dev'],
        url: 'https://mickaelrebeau.github.io/GODOT/firstgame/index.html'
    },
    {
        id: 'p2',
        tags: ['Web', 'Culture', 'Event'],
        url: 'https://www.oseculture.fr/'
    },
    {
        id: 'p3',
        tags: ['Vercel', 'React', 'Design'],
        url: 'https://pixel-plateform.vercel.app/'
    },
    {
        id: 'p4',
        tags: ['Social', 'Networking', 'Dev'],
        url: 'https://meetdev-mike-dreeman.vercel.app/'
    },
    {
        id: 'p5',
        tags: ['AI', 'Parsing', 'Utility'],
        url: 'https://cv-offer-comparer-mike-dreeman.vercel.app/'
    },
    {
        id: 'p6',
        tags: ['Competition', 'Ranking', 'VueJS'],
        url: 'https://mike-dreeman-clash-of-dev.vercel.app/'
    },
    {
        id: 'p7',
        tags: ['Integration', 'Responsive', 'Frontend'],
        url: 'https://mickaelrebeau.github.io/Helwena-Design/'
    }
]

export const experiences: Experience[] = [
    { id: 'e1', company: 'Freelance' },
    { id: 'e2', company: 'ProductLife Group' },
    { id: 'e3', company: 'Bloomind' },
    { id: 'e4', company: 'Alt | Incubateur Tech' }
]
