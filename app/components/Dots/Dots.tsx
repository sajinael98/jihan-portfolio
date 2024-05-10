import { Box } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const Dots = () => {
    return (
        <Box pos='relative' w={36} h={13}>
            <Image src='/dots.svg' alt='dots' fill priority/>
        </Box>
    )
}

export default Dots