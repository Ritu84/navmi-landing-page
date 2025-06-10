'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap, Wallet } from 'lucide-react'
import { ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Features() {
    const buildingRef = useRef<HTMLElement>(null)
    return (
        <section id="building-section" ref={buildingRef} className="bg-white py-25 md:py-34">
            <div className="@container mx-auto max-w-5xl px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold lg:text-5xl text-[#3B82F6] p-2">
                        What We're Building
                    </h2>
                    <p className="mt-4 text-xl text-[#1A1F36]">
                        Quant Stack in Progress. Strategy First, Scale Later.
                    </p>
                </motion.div>

                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-[1400px] gap-8 *:text-center md:mt-16 md:grid-cols-2">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-full"
                    >
                        <Card className="group shadow-zinc-950/5 w-full h-full flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Zap className="size-6 text-orange-500" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium">Execution Engine</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">Low latency infra boosts the model's performance.</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full"
                    >
                        <Card className="group shadow-zinc-950/5 w-full h-full flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Settings2 className="size-6 text-green-500" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium">Signal Research</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Multi-factor models are built on price action, volatility, and market microstructure.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="h-full"
                    >
                        <Card className="group shadow-zinc-950/5 w-full h-full flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Sparkles className="size-6 text-amber-700" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium">Backtest Stack</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Custom-built for speed and sanity testing.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="h-full"
                    >
                        <Card className="group shadow-zinc-950/5 w-full h-full flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Wallet className="size-6 text-yellow-500" aria-hidden />
                                </CardDecorator>
                                <h3 className="mt-6 font-medium">Risk & Capital Allocation</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Real-time tracking. Adaptive exposure. No surprises.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <motion.div 
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
            whileHover={{
                rotate: 360,
                transition: {
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity
                }
            }}
        >
            {children}
        </motion.div>
    </div>
)
