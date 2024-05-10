import React, { PropsWithChildren } from 'react'
import { SectionProps } from './Section.interface'
import { Box, Center, Stack, Text } from '@mantine/core'
import Dots from '../Dots'

const Section = ({ children, title, subtitle }: PropsWithChildren<SectionProps>) => {
    return (
        <Stack gap={0}>
            <Text ta='center' style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase' }}>{title}</Text>
            <Text
                ta='center'
                fw={700}
                fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 2)' }}
            >{subtitle}</Text>
            <Center><Dots /></Center>
            <Box py='xl'>
                {children}
            </Box>
        </Stack>
    )
}

export default Section