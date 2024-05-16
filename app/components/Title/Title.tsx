import { Text } from '@mantine/core'
import React from 'react'
import { TitleProps } from './Title.interface'

const Title = ({ children, ...props }: React.PropsWithChildren<TitleProps>) => {
    return (
        <Text
            fw={700}
            fz={{
                base: 'calc(var(--mantine-font-size-sm) * 2)',
                lg: 'calc(var(--mantine-font-size-md) * 3)'
            }}
            style={{ lineHeight: 1.5 }}

            {...props}
        >
            {children}
        </Text>
    )
}

export default Title