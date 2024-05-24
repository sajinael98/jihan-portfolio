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
    <>
      <Section title='Certified by' subtitle='Credentials and Achievements' id='journey'>
        <Certifications />
      </Section>
      <Section  id='about-me'>
        <AboutMe />
      </Section>
      <Section title='Services' subtitle='How I can help ?' id='services'>
        <ServicesList />
      </Section>
      <Section title='Projects' subtitle='A look at portfolio' id='projects'>
        <ProjectsList />
      </Section>
      <Section>
        <Summary />
      </Section>
      <Section>
        <Contact />
      </Section>
    </>
  );
}