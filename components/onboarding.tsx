'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, MessageSquare, Network } from 'lucide-react'
import { useRouter } from 'next/navigation'

const steps = [
  {
    title: "Install Extension",
    description: "Get started by installing the Norton extension for Chrome",
    icon: Download,
    action: "Install Now",
    link: "https://chromewebstore.google.com/detail/Norton/mjhaplbggdohblhjdhofhmmegjjgdgph?hl=en-GB&authuser=0"
  },
  {
    title: "Add Message Format",
    description: "Create your personalized message template for connection requests",
    icon: MessageSquare,
    action: "Create Template",
    link: "#"
  },
  {
    title: "Start Networking",
    description: "Begin your LinkedIn networking journey",
    icon: Network,
    action: "Go to LinkedIn",
    link: "https://linkedin.com"
  }
]

function OnboardingHeader() {
  return (
    <div className="mb-4">
      <Link href="/home" className="flex items-center text-gray-900 dark:text-gray-400">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Home
      </Link>
    </div>
  )
}

function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter(); // Moved useRouter hook to the top level of the component

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent dark:text-white">
      
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-12">
          <OnboardingHeader />
          <h1 className="text-2xl font-semibold mb-2">Welcome to Norton</h1>
          <p className="text-gray-600 dark:text-gray-400">Let's get you set up in a few simple steps</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-xl border ${
                currentStep === index 
                  ? 'border-gray-500 bg-blue-50 dark:bg-blue-950/20' 
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${
                  currentStep === index 
                    ? 'bg-gray-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                  <Button 
                    asChild
                    variant={currentStep === index ? "default" : "outline"}
                    className="w-full sm:w-auto"
                    onClick={() => setCurrentStep(index)}
                  >
                    <Link href={step.link} target={step.link.startsWith('http') ? '_blank' : undefined}>
                      {step.action}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              if (currentStep === steps.length - 1) {
                router.push('/profile'); // Directly using router here
              } else {
                setCurrentStep(prev => Math.min(steps.length - 1, prev + 1));
              }
            }}
            // disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
} 

export default OnboardingPage;