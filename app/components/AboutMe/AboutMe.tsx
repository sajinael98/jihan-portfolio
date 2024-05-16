import { Box, Flex, Stack, Text, Image } from '@mantine/core'
import React from 'react'
import Dots from '../Dots'
import NImage from 'next/image'
import Title from '../Title'

const AboutMe = () => {
    return (
        <Flex
            gap={{ base: 'md' }}
            direction={{ base: 'column-reverse', lg: 'row' }}
            style={{
                backgroundColor: '#DED1D8',
                minHeight: 530,
                borderRadius: 'calc(var(--mantine-radius-md) * 2)'
            }}
            px={{
                base: 'sm',
                lg: 'calc(var(--mantine-spacing-md) * 4)'
            }}
            justify={{ lg: 'space-between' }}
            align={{
                lg: 'center'
            }}
        >
            <Stack flex={1} gap={0}>
                <Text style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase' }}>about me</Text>
                <Title>
                    Design your ideas
                </Title>
                <Dots />
                <Text mt={'calc(var(--mantine-spacing-md) * 2)'} mr={{ lg: 50 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo
                </Text>
            </Stack>
            <Flex flex={1} justify={{ base: 'center', lg: 'flex-end' }} mt={{ base: 'md' }} >
                <Box w={{ base: 250, lg: 440 }} h={{ base: 150, lg: 300 }} style={{ borderRadius: 28 }} bg='#F8E3BA' pos='relative'>
                    <Image radius={28} left={{ base: -20 }} top={{ base: 20 }} src='/desk.png' alt='desk background' component={NImage} priority fill />
                </Box>
            </Flex>
        </Flex>
    )
}

export default AboutMe