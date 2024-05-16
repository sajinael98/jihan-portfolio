import React, { PropsWithChildren } from 'react'
import { SectionProps } from './Section.interface'
import { Box, Center, Divider, Stack, Text } from '@mantine/core'
import Dots from '../Dots'
import Title from '../Title'
import SpacedText from '../SpacedText'

const Section = ({ children, title, subtitle }: PropsWithChildren<SectionProps>) => {
    return (
        <>
            <Stack>
                {(title || subtitle) && <Stack gap={0}>
                    {title && <SpacedText
                        ta='center'
                    >
                        {title}
                    </SpacedText>}
                    {subtitle && <Title ta='center'>{subtitle}</Title>}
                    <Center mt='md'>
                        <Dots />
                    </Center>
                </Stack>}
                <Box>
                    {children}
                </Box>
            </Stack>
            <Divider color='#F3D1BF' size='md' style={{ opacity: 0.5 }} />
        </>
    )
}

export default Section