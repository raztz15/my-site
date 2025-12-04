
import { AppBar, Box, Toolbar, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { Hero } from './components/Hero';
// import { handleScrollTo } from './utils';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { useActiveSection, type SectionId } from './hooks/useActiveSection';
import { useState } from 'react';
import { Header } from './components/Header';

const navItems: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function App() {


  const activeSection = useActiveSection();


  const handleScrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // adjust to your AppBar height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };




  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        background:
          'radial-gradient(circle at top, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at bottom left, rgba(56,189,248,0.22), transparent 55%), #020617',
      }}
    >
      {/* Top navigation */}
      <Header />

      {/* Main content */}
      <Box component='main'>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <Experience />

        {/* PROJECTS */}
        <Projects />

        {/* SKILLS */}
        <Skills />


        {/* CONTACT */}
        <Contact />

      </Box>
    </Box>
  )
}

export default App
