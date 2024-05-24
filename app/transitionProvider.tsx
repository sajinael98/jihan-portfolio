"use client"
import { Box } from '@mantine/core'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import image from '../public/remix3-crop-ezgif.com-loop-count.gif'
import { PropsWithChildren, useEffect } from 'react'

const TransitionProvider = ({ children }: PropsWithChildren) => {
    const [scope, animate] = useAnimate()
    
    async function handleAnimate() {
        await animate('#loading', {
            height: 0,
            opacity: 0
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
                    borderBottomRightRadius: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >

                <Box pos='relative' mx='md' w={500} h={300} >
                    <Image onAnimationEnd={()=>{
                        alert(2)
                    }} src={image} alt='logo' fill priority objectFit='contain' />
                </Box>
            </Box>

            {children}
        </Box >
    )
}

export default TransitionProvider