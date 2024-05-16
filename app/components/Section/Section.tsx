import { Box, Center, Divider, Stack } from '@mantine/core'
import { PropsWithChildren } from 'react'
import Dots from '../Dots'
import SpacedText from '../SpacedText'
import Title from '../Title'
import { SectionProps } from './Section.interface'

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
                <Box py='md'>
                    {children}
                </Box>
            </Stack>
            <Divider color='#F3D1BF' size='md' style={{ opacity: 0.5 }} />
        </>
    )
}

export default Section