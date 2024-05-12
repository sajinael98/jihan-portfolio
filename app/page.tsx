"use client"
import React, { useState, useEffect } from 'react';
import { Box, Stack, } from '@mantine/core';
import { motion } from 'framer-motion';
import { useWindowScroll } from '@mantine/hooks';
import AboutMe from './components/AboutMe';
import Section from './components/Section';
import Certifications from './components/Certifications';
import { ServicesList } from './modules/services/presentation';
import { ProjectsList } from './modules/projects/presentation';

export default function HomePage() {
  return (
    <Stack gap={'calc(var(--mantine-spacing-md) * 6)'} py={'calc(var(--mantine-spacing-md) * 4)'}>
      <Section title='Certified by' subtitle='Credentials and Achievements'>
        <Certifications />
      </Section>
      <Box>
        <AboutMe />
      </Box>
      <Section title='Services' subtitle='How I can help ?'>
        <ServicesList />
      </Section>
      <Section title='Projects' subtitle='A look at portfolio'>
        <ProjectsList />
      </Section>
    </Stack>
  );
}