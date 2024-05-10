import { Box, Flex, Grid, SimpleGrid } from '@mantine/core'
import React from 'react'
import { certifications } from '../../../constants'
import Image from 'next/image'

const Certifications = () => {
    return (
        <Grid justify='center' align='center'>
            {certifications.map((c, index) => <Grid.Col h={c === '/certified/ixdf.png' ? 100 : 150} span={{ lg: 3, base: 6 }} key={index} pos={'relative'} >
                <Image objectFit='contain' src={c} alt='certificate' fill priority style={{ mixBlendMode: c === '/certified/ixdf.png' ? 'normal' : 'exclusion' }} />
            </Grid.Col>)}
        </Grid>
    )
}

export default Certifications