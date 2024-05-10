import { Service } from "./app/modules/services/types"

export const links = [
    {
        label: 'About me',
        herf: 'about-me'
    },
    {
        label: 'Services',
        herf: 'services'
    },
    {
        label: 'Projects',
        herf: 'projects'
    },
    {
        label: 'Journey',
        herf: 'journey'
    }
] as const

export const certifications = ['/certified/gaza.svg', '/certified/KA.png', '/certified/ixdf.png',] as const

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
export const services: Service[] = [
    {
        icon: '/services/Mobile(png).png',
        title: 'Mobile Design',
        description
    },
    {
        icon: '/services/Web(png).png',
        title: 'Website Design',
        description
    },
    {
        icon: '/services/Poster(png).png',
        title: 'Social Media Design',
        description
    },
    {
        icon: '/services/Paint Brush(png).png',
        title: 'Logo Design',
        description
    },

] as const