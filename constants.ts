import { Project } from "./app/modules/projects/types"
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

export const categories = ["Web UI", "Mobile UI", "Social Media ADs", "Logo & Branding"] as const

export const projects: Project[] = [
    {
        title: 'Food Mobile App',
        image: '/portfolio/image1.jpg'
    },
    {
        title: 'Maps App',
        image: '/portfolio/image2.jpg'
    },
    {
        title: 'Restaurant Web',
        image: '/portfolio/image3.jpg'
    },
    {
        title: 'Store Social Media ADs',
        image: '/portfolio/image4.jpg'
    },
] as const