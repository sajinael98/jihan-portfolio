"use client"
import { Box } from '@mantine/core'
import { useAnimate } from 'framer-motion'
import { PropsWithChildren, useEffect } from 'react'

const TransitionProvider = ({ children }: PropsWithChildren) => {
    const [scope, animate] = useAnimate()

    async function handleAnimate() {
        await animate('#loading', {
            height: 0,

        }, { delay: 2, duration: 0.25 })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <Box ref={scope} pos='relative'>
            <Box id='loading'
                style={{
                    height: "110vh",
                    width: "100vw",
                    backgroundColor: '#EFE1FF',
                    position: 'fixed',
                    zIndex: 99999,
                    borderBottomLeftRadius: '100px',
                    borderBottomRightRadius: '100px'
                }} />

            {children}
        </Box >
    )
}

export default TransitionProvider