'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'brain', // Represents intelligence/strategy
            question: 'What exactly does Navmi Partners do?',
            answer:
                'We are a proprietary trading firm that uses a combination of machine learning, quantitative analysis, and traditional trading strategies to generate alpha. We trade our own capital with code, data, and discipline.',
        },
        {
            id: 'item-2',
            icon: 'zap', // Represents speed and innovation
            question: 'What makes us different from other quant firms?',
            answer:
                'We don’t manage money for others. We don’t chase headlines. We focus on deep research, smart infrastructure, and executing ideas fast. Our edge comes from speed, clarity, and conviction—not bureaucracy.',
        },
        {
            id: 'item-3',
            icon: 'briefcase', // Job roles
            question: 'Are you hiring? What roles are open?',
            answer:
                'Yes—we are looking for curious minds who love building: Quant Interns, Systems Developers, and Jr. Systems Developers.',
        },
        {
            id: 'item-4',
            icon: 'mail', // Refers to email-based application
            question: 'What’s the application process like?',
            answer:
                'Minimal fluff. Email us at navmipartners@gmail.com with: What you have built or researched and GitHub, resume, or anything that shows you are serious.',
        },
        {
            id: 'item-5',
            icon: 'lightbulb', // Ideas and collaboration
            question: 'Can I pitch a collaboration or idea?',
            answer:
                'Yes, but keep it brief and thoughtful. We are open to sharp edges, not vague decks. Reach us at navmipartners@gmail.com.',
        },
    ]
    

    return (
        <section className="dark:bg-background py-12 md:py-25 lg:py-34">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <div className="sticky top-20">
                            <h2 className="mt-2 text-2xl sm:text-3xl md:text-[40px] font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-2 sm:mt-4 text-sm sm:text-base">
                                Any queries? Reach out to us at{' '}
                                <Link
                                    href="mailto:navmipartners@gmail.com"
                                    className="text-primary font-medium hover:underline">
                                    navmipartners@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-3 sm:space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-2 sm:px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-4 sm:py-5 hover:no-underline">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base text-left">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 sm:pb-5">
                                        <div className="px-2 sm:px-9">
                                            <p className="text-base text-left">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}