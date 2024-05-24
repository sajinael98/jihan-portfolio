"use client"
import { AppShell, Box, Burger, Button, Container, Flex, Group, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { links } from '../../../constants'
import PrimaryButton from '../PrimaryButton'
import SpacedText from '../SpacedText'
import Title from '../Title'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [opened, { toggle }] = useDisclosure(false)
    const [text] = useTypewriter({
        words: ['UIUX & Graphic Designer'],
        typeSpeed: 50,
        loop: Infinity,
    })
    function scrollHandler(link: any) {
        const div = document.getElementById(link.herf);
        div?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <AppShell
            navbar={{
                width: 220,
                breakpoint: 'md',
                collapsed: { desktop: true, mobile: !opened }
            }}
        >
            <AppShell.Header
                pos='relative'
                bg='#EFE1FF'
                withBorder={false}
            >
                <Container size='lg' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Group pt={{ base: 'lg', lg: 'calc(var(--mantine-spacing-md) * 3)' }} justify='space-between'>
                        <Box pos='relative' w={{ base: 80, lg: 100 }} h={50}>
                            <Image src='/Logo.svg' alt="jihan's logo" fill priority />
                        </Box>
                        <Group gap={40} visibleFrom='lg'>
                            {links.map(link => <Button variant='transparent' onClick={() => {
                                scrollHandler(link)
                            }} fz='lg' fw={500} key={link.herf}>{link.label}</Button>)}
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
                            <Burger opened={opened} onClick={toggle} variant='outline' color='yellow.6' />
                        </Group>
                    </Group>
                    <Flex flex={1} direction={{ base: 'column-reverse', lg: 'row' }}>
                        <Stack flex={1} gap={0} justify='center'>
                            <SpacedText>Brining Idea to life</SpacedText>
                            <Text
                                fz={'calc(var(--mantine-font-size-md) * 3)'}
                                variant="gradient"
                                fw={700}
                                gradient={{ deg: 90, from: '#F0B13F', to: '#96815C' }}>
                                Hi There !
                            </Text>
                            <Title
                                h={{ base: 80, lg: 130 }}
                                w={{ base: 250, lg: 500 }}>
                                I&apos;m Jihan, {text}
                            </Title>
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
                        </Stack>
                        <Flex flex={1} mih={400} pos='relative'>
                            <Image src='/illustration.gif' objectFit='contain' alt="hero image" fill priority />
                        </Flex>
                    </Flex>
                </Container>
            </AppShell.Header>
            <AppShell.Main>
                {children}
            </AppShell.Main>
            <AppShell.Footer pb='md' bg='#FFF7E9' pos='static' withBorder={false}>
                <Container size='lg'>

                    <Flex mb='md' justify='space-between' direction={{ base: 'column', lg: 'row' }} gap='md'>
                        <Stack align='center'>
                            <Box pos='relative' w={{ base: 80, lg: 100 }} h={50}>
                                <Image src='/Logo.svg' alt="jihan's logo" fill priority />
                            </Box>
                            <Text>Bring ideas to life</Text>
                        </Stack>
                        <Stack align='center'>
                            <Text ta='center' fw={700} fz='lg'>Find me on</Text>
                            <Group>
                                <Image src='/social/Linkedin.png' width={50} height={50} alt='linked in' />
                                <Image src='/social/Instagram.png' width={50} height={50} alt='linked in' />
                                <Image src='/social/Behance.png' width={50} height={50} alt='linked in' />
                            </Group>
                        </Stack>
                    </Flex>
                    <Text ta='center'>All rights reserved {new Date().getFullYear()}.</Text>
                </Container>
            </AppShell.Footer>
            <AppShell.Navbar bg='rgba(0,0,0,0.5)'>
                <Box style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ height: '100%', width: '100%', position: 'absolute', left: 0, top: 0 }} onClick={toggle} />
                    <Stack>
                        {links.map(link => <Button onClick={() => {
                            scrollHandler(link)
                            toggle()
                        }} variant='transparent' c='yellow.6' size='lg' fz='calc(var(--mantine-font-size-md) * 2)' fw={700} key={link.herf}>{link.label}</Button>)}
                    </Stack>
                </Box>
            </AppShell.Navbar>
        </AppShell>
    )
}

export default AppLayout