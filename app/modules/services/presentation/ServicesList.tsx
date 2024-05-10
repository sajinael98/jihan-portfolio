import { SimpleGrid } from '@mantine/core'
import React from 'react'
import { services } from '../../../../constants'
import ServiceCard from './ServiceCard'

const ServicesList = () => {
    return (
        <SimpleGrid cols={{ lg: 4, base: 1 }} spacing={'calc(var(--mantine-spacing-md) * 2)'}>
            {services.map((service, index) => <ServiceCard key={index} index={index} service={service} />)}
        </SimpleGrid>
    )
}

export default ServicesList