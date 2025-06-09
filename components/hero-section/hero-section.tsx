import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from "@/components/hero-section/hero5-headers"
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { ChevronRight } from 'lucide-react'
import { TextEffect } from './text-effect'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden ">

                <section className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="/hero.jpg"
                            alt="Hero background image"
                        />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <TextEffect
                            as="h1"
                            per="char"
                            preset="fade"
                            className="typewriter-text text-white text-5xl md:text-6xl xl:text-[80px] font-bold"
                        >
                            Born to Beat the Market.
                        </TextEffect>


                        <TextEffect
                            as="p"
                            per="word"
                            preset="fade"
                            className="mt-10 max-w-3xl text-white text-lg md:text-xl font-semibold"
                        >
                            We are an algorithmic trading firm in stealth mode — building high-conviction systems to trade our own capital with code, data, and discipline.
                        </TextEffect>

                        <div className="mt-10">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 rounded-full pl-5 pr-3 text-base bg-gradient-to-r from-[#3B82F6] to-[#7D5EFF] hover:from-[#7D5EFF] hover:to-[#4A6CF7]">
                                <Link href="#join-us">
                                    <span className="text-nowrap">Join the Build</span>
                                    <ChevronRight className="ml-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}