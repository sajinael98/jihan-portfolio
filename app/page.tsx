"use client"
import { Box, Stack, } from '@mantine/core';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Section from './components/Section';
import Summary from './components/Summary';
import { Contact } from './modules/contact/presentation';
import { ProjectsList } from './modules/projects/presentation';
import { ServicesList } from './modules/services/presentation';

export default function HomePage() {
  return (
    <Stack gap={'calc(var(--mantine-spacing-md) * 4)'} py={'calc(var(--mantine-spacing-md) * 2)'}>
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
      <Section>
        <Summary />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Stack>
  );
}