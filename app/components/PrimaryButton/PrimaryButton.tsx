import React, { PropsWithChildren } from 'react'
import { forwardRef } from 'react';
import { Button, ButtonProps, useProps } from '@mantine/core';

interface PrimaryButtonProps
    extends ButtonProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof ButtonProps> {}

const defaultProps: Partial<PrimaryButtonProps> = {};

const PrimaryButton = forwardRef<HTMLButtonElement, PropsWithChildren<PrimaryButtonProps>>((props, ref) => {
    const buttonProps = useProps('PrimaryButton', defaultProps, props);
    return <Button {...buttonProps}  ref={ref} />
});

PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton