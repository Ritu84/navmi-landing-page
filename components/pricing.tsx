import { Cpu, Zap, CircleCheck } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-4 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Why We Exist ? </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-2">
                        <p className="text-muted-foreground">
                            Because Most Trading Firms Are Either Too Big to Pivot, or Too Lazy to Think.<br /> We founded this company because we believe that <span className="text-[#4A6CF7] font-bold">speed, simplicity, and intelligent</span> programming can still outperform bureaucracy, overfitting, and jargon.
                        </p>
                        <p className="text-muted-foreground">Our goal is to:</p>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div>
                                    <h3 className="text-base font-medium">Simple Explanations</h3>
                                    <p className="text-muted-foreground text-sm">Get jargon-free explanations of what your test results actually mean for your health.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div>
                                    <h3 className="text-base font-medium">Highlighted Anomalies</h3>
                                    <p className="text-muted-foreground text-sm">Instantly see which values are outside normal ranges and what they could indicate.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div>
                                    <h3 className="text-base font-medium">Personalized Recommendations</h3>
                                    <p className="text-muted-foreground text-sm">Receive tailored health advice based on your specific lab results and medical history.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}