import React, { useRef } from 'react'
import { ServiceCardProps } from './ServiceCard.interface'
import { Box, Paper, Text } from '@mantine/core'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '../../../../hooks/use-is-mobile'

const CARD_COLOR_1 = '#F8E3BA'
const CARD_COLOR_2 = '#F2E2EB'

const vairants = {
    initialL: { opacity: 0, translateX: -50 },
    initialR: { opacity: 0, translateX: 50 },
    animate: { opacity: 1, translateX: 0 }
}

const ServiceCard = ({ index, service }: ServiceCardProps) => {
    const ismobile = useIsMobile()
    const cardRef = useRef(null)
    const isCardRefInView = useInView(cardRef, { once: true })
    const initial = ismobile ? index % 2 === 0 ? 'initialL' : 'initialR' : 'initialL'
    const animate = isCardRefInView ? 'animate' : initial

    return (
        <Paper
            ref={cardRef}
            style={{ gap: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            shadow='sm'
            bg={index % 2 === 0 ? CARD_COLOR_1 : CARD_COLOR_2}
            h={300}
            radius='calc(var(--mantine-radius-md) * 4)'
            component={motion.div}
            variants={vairants}
            initial={'initial'}
            animate={animate}
            transition={{
                delay: 0.1 * index,
                duration: 0.5
            }}
        >
            <Box pos='relative' h={50} w={50}>
                <Image src={service.icon} alt={service.title} fill priority />
            </Box>
            <Text fw={600} fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 1.5)' }}>{service.title}</Text>
            <Text w={210}>{service.description}</Text>
        </Paper>
    )
}

export default ServiceCard