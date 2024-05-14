import React, { PropsWithChildren } from 'react'
import { SectionProps } from './Section.interface'
import { Box, Center, Divider, Stack, Text } from '@mantine/core'
import Dots from '../Dots'

const Section = ({ children, title, subtitle }: PropsWithChildren<SectionProps>) => {
    return (
        <>
            <Stack>
                {(title || subtitle) && <Stack gap={0}>
                    {title && <Text
                        ta='center'
                        style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.5 }}
                        fz={{ base: 'calc(var(--mantine-font-size-sm) * 1.25)', lg: 'calc(var(--mantine-font-size-md) * 1.5)' }}

                    >
                        {title}
                    </Text>}
                    {subtitle && <Text
                        style={{ lineHeight: 1.5 }}
                        ta='center'
                        fw={700}
                        fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 3)' }}
                    >{subtitle}</Text>}
                    <Center mt='md'>
                        <Dots />
                    </Center>
                </Stack>}
                <Box>
                    {children}
                </Box>
            </Stack>
            <Divider  color='#F3D1BF' size='md' style={{ opacity: 0.5 }} />
        </>
    )
}

export default Section