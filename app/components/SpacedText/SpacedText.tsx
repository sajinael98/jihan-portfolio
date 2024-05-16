import React, { PropsWithChildren } from 'react'
import { SpacedTextProps } from './SpacedText.interface'
import { Text } from '@mantine/core'

const SpacedText = ({ children, ...props }: PropsWithChildren<SpacedTextProps>) => {
    return (
        <Text
            style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase' }}
            fz={{ base: 'calc(var(--mantine-font-size-sm) * 1.25)', lg: 'calc(var(--mantine-font-size-md) * 1.5)' }}
            {...props}>{children}
        </Text>
    )
}

export default SpacedText