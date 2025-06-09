import React from 'react';
import { HeroHeader } from '../../components/hero-section/hero5-headers';
import { Card, CardHeader, CardContent } from '../../components/ui/card';
import Pricing from '@/components/pricing';

const AboutPage = () => {
  return (
    <div>
    <div className="min-h-screen flex flex-col bg-muted dark:bg-background ">
      <HeroHeader />
      <main className="flex-1 flex flex-col dark:bg-transparent items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4   ">About <span className='bg-gradient-to-r from-[#4A6CF7] to-[#7D5EFF] bg-clip-text text-transparent'>Navmi Partners</span> </h1>
        <p className="text-[18px] text-center max-w-2xl mb-10">
          We are a small team of traders and engineers developing a unique trading engine from the ground up. No asset management. No advisory. Deep research, intelligent infrastructure, and our own money on the line. We aren't optimizing for press. We are optimizing for edge.
        </p>
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 justify-center">
          <Card className="flex-1">
            <CardHeader className="text-xl font-semibold text-center mb-2">Our Vision</CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                To redefine trading by building intelligent infrastructure and conducting deep research, putting our own capital at risk to discover true alpha. We believe in a focused, noise-free approach, prioritizing innovation and edge over publicity or client acquisition.
              </p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader className="text-xl font-semibold text-center mb-2">Our Mission</CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                To operate as a high-conviction, early-stage team dedicated to developing a unique trading engine. We avoid distractions like asset management or advisory, and instead channel our expertise into building, testing, and refining our own strategies for sustainable success.
              </p>
            </CardContent>
          </Card>
        </div>
        <blockquote className="italic text-center text-lg font-medium text-primary mt-10">“We don't need attention. We need alpha.”</blockquote>
      </main>
     

    </div>
    <Pricing />
    </div>
  );
};

export default AboutPage;
