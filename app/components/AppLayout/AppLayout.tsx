"use client"
import { AppShell, Box, Burger, Button, Flex, Group, Image as MantineImage, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import { links } from '../../../constants'
import { useDisclosure } from '@mantine/hooks'
import { useTypewriter } from 'react-simple-typewriter'
import PrimaryButton from '../PrimaryButton'

const PADDING_INLINE = { base: 'calc(var(--mantine-spacing-sm) * 3)', lg: 'calc(var(--mantine-spacing-md) * 10)' }

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [opened, { toggle }] = useDisclosure(false)
    const [text] = useTypewriter({
        words: ['UIUX & Graphic Designer'],
        typeSpeed: 50,
        loop: Infinity,
    })
    return (
        <AppShell
            header={{
                height: { base: '100vh', lg: '100vh' }
            }}
        >
            <AppShell.Header
                px={PADDING_INLINE}
                bg='#EFE1FF'
                withBorder={false}
                pos='absolute'>

                <Box visibleFrom='lg' style={{ position: 'absolute', bottom: 0, left: 0, }}>
                    <Box pos='relative' w={200} h={200}>
                        <Image src='/hero-l.svg' alt="jihan's logo" fill priority />
                    </Box>
                </Box>
                <Box visibleFrom='lg' style={{ position: 'absolute', top: -100, right: 0, zIndex: -1 }}>
                    <Box pos='relative' w={600} h={800}>
                        <Image src='/hero-r.svg' alt="jihan's logo" fill priority />
                    </Box>
                </Box>

                <Stack className='full-height'>
                    <Group pt={{ base: 'lg', lg: 'calc(var(--mantine-spacing-md) * 3)' }} justify='space-between'>
                        <Box pos='relative' w={{ base: 80, lg: 100 }} h={50}>
                            <Image src='/Logo.svg' alt="jihan's logo" fill priority />
                        </Box>
                        <Group gap={64} visibleFrom='lg'>
                            {links.map(link => <Text fz='lg' fw={500} key={link.herf}>{link.label}</Text>)}
                        </Group>
                        <Group visibleFrom='lg'>
                            <PrimaryButton>
                                Behance
                            </PrimaryButton>
                            <PrimaryButton variant='outline'>
                                Discover
                            </PrimaryButton>
                        </Group>
                        <Group hiddenFrom='md'>
                            <Burger variant='outline' color='yellow.6' />
                        </Group>
                    </Group>
                    <Flex flex={1} direction={{ base: 'column-reverse', lg: 'row' }} gap={'md'}>
                        <Flex direction={'column'} justify={{ lg: 'center' }} flex={{ base: 2, lg: 1 }} gap={0} >
                            <Text style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase' }}>Brining Idea to life</Text>
                            <Text
                                fz={'calc(var(--mantine-font-size-md) * 3)'}
                                variant="gradient"
                                fw={700}
                                gradient={{ deg: 90, from: '#F0B13F', to: '#96815C' }}>
                                Hi There !
                            </Text>
                            <Text
                                h={{ base: 80, lg: 130 }}
                                fw={700}
                                fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 3)' }}
                                w={{ base: 250, lg: 420 }}>
                                I&apos;m Jihan, {text}
                            </Text>
                            <Text mt={'lg'} w={{ base: 300, lg: 420 }}>
                                Design all your distinctive advertising materials ,
                                and create your interfaces for your application or website and build its UX research.
                            </Text>
                            <Group >
                                <PrimaryButton >
                                    Discoiver
                                </PrimaryButton>
                                <Image src='/arrow.svg' alt="hero image" width={120} height={100} priority />
                            </Group>
                        </Flex>
                        <Flex flex={{ base: 1, lg: 1 }} pos='relative'>
                            <Image src='/heroPic(svg).svg' alt="hero image" fill priority />
                        </Flex>
                    </Flex>
                </Stack>
            </AppShell.Header>
            <AppShell.Main px={PADDING_INLINE}>
                {children}
            </AppShell.Main>
        </AppShell>
    )
}

export default AppLayout