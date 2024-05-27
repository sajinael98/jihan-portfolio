import React, { PropsWithChildren, forwardRef } from 'react'
import { Text, TextProps, useProps } from '@mantine/core'

interface TitleProps
    extends TextProps,
    Omit<React.ComponentPropsWithoutRef<'p'>, keyof TextProps> { }

const defaultProps: Partial<TitleProps> = {};

const Title = forwardRef<HTMLParagraphElement, PropsWithChildren<TitleProps>>((props, ref) => {
    const textProps = useProps('CustomTitle', defaultProps, props);
    return <Text {...textProps} ref={ref} />
});

Title.displayName = 'Title'

export default Title