import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import About from '../components/About';
import Services from '../components/Services';
import LeadGeneration from '../components/LeadGeneration';
import Development from '../components/Development';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <section id="why-grand-vector">
        <About />
      </section>
      <section id="solutions">
        <Services />
      </section>
      <section id="leads">
        <LeadGeneration />
      </section>
      <section id="automation">
        <Development />
      </section>
      <section id="integrations">
        <Portfolio />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;