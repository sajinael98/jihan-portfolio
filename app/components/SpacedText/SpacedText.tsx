import React, { PropsWithChildren, forwardRef } from 'react'
import { Text, TextProps, useProps } from '@mantine/core'

interface SpacedTextProps
    extends TextProps,
    Omit<React.ComponentPropsWithoutRef<'p'>, keyof TextProps> { }

const defaultProps: Partial<SpacedTextProps> = {};

const SpacedText = forwardRef<HTMLParagraphElement, PropsWithChildren<SpacedTextProps>>((props, ref) => {
    const textProps = useProps('SpacedText', defaultProps, props);
    return <Text {...textProps} ref={ref} />
});

SpacedText.displayName = 'SpacedText'

export default SpacedText