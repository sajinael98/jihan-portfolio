import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import React from 'react'
import PrimaryButton from '../../../../components/PrimaryButton'
import Image from 'next/image'
import Dots from '../../../../components/Dots'
import Title from '../../../../components/Title'
import SpacedText from '../../../../components/SpacedText'

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
        <SpacedText>
          How I do it ?
        </SpacedText>
        <Title
          w={{ base: 250, lg: 420 }}>
          Get In Touch
        </Title>
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