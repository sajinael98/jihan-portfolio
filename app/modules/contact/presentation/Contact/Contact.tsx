import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import React from 'react'
import PrimaryButton from '../../../../components/PrimaryButton'
import Image from 'next/image'
import Dots from '../../../../components/Dots'

const Contact = () => {
  return (
    <Flex
      pos='relative'
      bg='#F8E3BA'
      direction={{ base: 'column-reverse', lg: 'row' }}
      justify='space-between'
      px={{ base: 'md', lg: 'calc(var(--mantine-spacing-md) * 4)' }}
      py='calc(var(--mantine-spacing-md) * 2)'
    >
      <Flex align='center' justify='center' w={140} h={70} bg='white' pos='absolute' top={-45} >
        <Image src='/dots.svg' alt="contact" width={100} height={50} priority />
      </Flex>
      <Stack gap={0} justify='center'>
        <Text
          style={{ letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.5 }}
          fz={{ base: 'calc(var(--mantine-font-size-sm) * 1.25)', lg: 'calc(var(--mantine-font-size-md) * 1.5)' }}
        >
          How I do it ?
        </Text>
        <Text
          fw={700}
          fz={{ base: 'calc(var(--mantine-font-size-sm) * 2)', lg: 'calc(var(--mantine-font-size-md) * 3)' }}
          w={{ base: 250, lg: 420 }}>
          Get In Touch
        </Text>
        <Text fw={400}>Lorem ipsum dolor sit amet, consectetur </Text>
        <PrimaryButton w={200} mt={'md'}>
          Send me an email
        </PrimaryButton>
      </Stack>
      <Box pos='relative' w={300} h={250} mx={{ base: 'auto', lg: 0 }}>
        <Image src='/block2.png' alt="contact" fill priority />
      </Box>
    </Flex>
  )
}

export default Contact