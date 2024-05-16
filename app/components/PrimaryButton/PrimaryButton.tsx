import React from 'react';

import { Button, ButtonProps, useProps } from '@mantine/core';

interface PrimaryButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const defaultProps: Partial<PrimaryButtonProps> = {
    
};


const PrimaryButton = (props: PrimaryButtonProps) => {
    const { children, ...buttonProps } = useProps('PrimaryButton', defaultProps, props);

    return (
        <Button  {...buttonProps} >
            {children}
        </Button>
    )
}

export default PrimaryButton