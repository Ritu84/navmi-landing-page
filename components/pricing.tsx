import { Cpu, Zap, CircleCheck } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-4 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Why We Exist ? </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-2">
                        <p className="text-muted-foreground text-lg">
                            Because Most Trading Firms Are Either Too Big to Pivot, or Too Lazy to Think.<br /> We founded this company because we believe that <span className="text-[#4A6CF7] font-bold">speed, simplicity, and intelligent</span> programming can still outperform bureaucracy, overfitting, and jargon.
                        </p>
                        <p className="text-muted-foreground text-lg">Our goal is to:</p>

                        <div className="space-y-6 pt-6  ">
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div className="mt-[-6px]">
                                    <h3 className="text-base font-medium text-lg">Explore</h3>
                                    <p className="text-muted-foreground text-md">Discover unconventional possibilities</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div className="mt-[-6px]">
                                    <h3 className="text-base font-medium text-lg">Validate</h3>
                                    <p className="text-muted-foreground text-md">Scale only when proven.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CircleCheck className="size-5 text-green-500" />
                                <div className="mt-[-6px]">
                                    <h3 className="text-base font-medium text-lg">Focus</h3>
                                    <p className="text-muted-foreground text-md">Stay small, smart, and hungry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0 flex justify-center">
                        <div className="relative w-full max-w-[800px] bg-gradient-to-b from-zinc-300 to-white dark:from-zinc-700 rounded-2xl p-px pb-12"> {/* Extend gradient */}
                            <Image
                                src="/exist.png"
                                alt="Pricing illustration"
                                width={800}
                                height={400}
                                className="rounded-2xl object-contain w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}