"use client"
import React, { useState, useEffect } from 'react';
import { Box, Stack, } from '@mantine/core';
import { motion } from 'framer-motion';
import { useWindowScroll } from '@mantine/hooks';
import AboutMe from './components/AboutMe';
import Section from './components/Section';
import Certifications from './components/Certifications';

export default function HomePage() {
  return (
    <Stack gap={'calc(var(--mantine-spacing-md) * 6)'} py={'calc(var(--mantine-spacing-md) * 4)'}>
      <Section title='Certified by' subtitle='Credentials and Achievements'>
        <Certifications />
      </Section>
      <Box>
        <AboutMe />
      </Box>
    </Stack>
  );
}