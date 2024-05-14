import { Box, Flex, Group, Stack, Text, Image } from '@mantine/core'
import React from 'react'
import Dots from '../Dots'
import NImage from 'next/image'

const Summary = () => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      <Flex h={{ base: 200, lg: '100%' }} flex={{ lg: 1 }} justify={'center'} >
        <Box w={{ base: 250, lg: 440 }} h={{ base: 150, lg: 500 }} style={{ borderRadius: 28 }} bg='#F8E3BA' pos='relative'>
          <Image radius={28} left={{ base: -20 }} top={{ base: 20 }} src='/desk.png' alt='desk background' component={NImage} priority fill />
        </Box>
      </Flex>
      <Stack flex={1}>
        <Text
          style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.5 }}
          fz={{ base: 'calc(var(--mantine-font-size-sm) * 1.25)', lg: 'calc(var(--mantine-font-size-md) * 1.5)' }}
        >
          How I do it ?
        </Text>
        <Text
          style={{ lineHeight: 1.5 }}
          fw={700}
          fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 3)' }}
        > Bringing Idea to
          <br />life
        </Text>
        <Dots />

        {['cyan.8', 'yellow.6', 'orange.8'].map(c => <Group key={c}>
          <Box w={{ base: 45, lg: 55 }} h={{ base: 45, lg: 55 }} style={{ borderRadius: '50%' }} bg={c} />
          <Stack flex={1} gap={0}>
            <Text mb='sm' style={{ lineHeight: 1, fontWeight: 700 }}>Lorem ipsum </Text>
            <Text style={{ lineHeight: 1, fontWeight: 400 }}>Lorem ipsum dolor sit amet, consectetur </Text>
          </Stack>
        </Group>)}

      </Stack>

    </Flex>
  )
}

export default Summary