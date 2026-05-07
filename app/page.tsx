'use client'
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';
import { Languages } from './components/landing/Languages';
import { CodeDemo } from './components/landing/CodeDemo';
import { CTA } from './components/landing/CTA';
import { Footer } from './components/landing/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Languages />
      <CodeDemo />
      <CTA />
      <Footer />
    </main>
  );
}
