import { Button, Group, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import React, { useRef } from 'react'
import { ProjectCardProps } from './ProjectCard.interface'
import { useIsMobile } from '../../../../hooks/use-is-mobile'
import { motion, useInView } from 'framer-motion'

const vairants = {
  initialL: { opacity: 0, translateX: -50 },
  initialR: { opacity: 0, translateX: 50 },
  animate: { opacity: 1, translateX: 0 }
}

const ProjectCard = ({ project, titleTop }: ProjectCardProps) => {
  const isMobile = useIsMobile()
  const Contianer = isMobile || titleTop ? Stack : Group

  return (

    <Stack
      p={'xl'} pos='relative' style={{ borderRadius: 'calc(var(--mantine-radius-md) * 3)', overflow: 'hidden' }} h={366}>
      <Image style={{ filter: 'brightness(70%)' }} objectFit='cover' src={project.image} alt='project image' fill priority />
      <Contianer flex={1} style={{ position: 'relative', zIndex: 1 }} justify='space-between' align='flex-end'>
        <Text style={{ alignSelf: isMobile || titleTop ? 'flex-start' : '' }} fz={'calc(var(--mantine-font-size-md) * 2)'} c='white' fw={700}>{project.title}</Text>
        <Button style={{ alignSelf: 'flex-end' }} radius='md' variant='white'>
          View Project
        </Button>
      </Contianer>
    </Stack>

  )
}

export default ProjectCard