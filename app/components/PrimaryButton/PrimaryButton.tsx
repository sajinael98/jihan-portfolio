import React from 'react'

import { useProps, MantineThemeProvider, createTheme, Button, ButtonProps } from '@mantine/core';

interface PrimaryButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const defaultProps: Partial<PrimaryButtonProps> = {

};


const PrimaryButton = (props: PrimaryButtonProps) => {
    const { children, ...buttonProps } = useProps('PrimaryButton', defaultProps, props);

    return (
        <Button {...buttonProps}>
            {children}
        </Button>
    )
}

export default PrimaryButton