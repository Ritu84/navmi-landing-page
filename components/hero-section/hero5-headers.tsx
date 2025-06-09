'use client'
import Link from 'next/link'
// import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
// import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'About ', href: '/about' },
    { name: 'Careers', href: '#join-us' },
    { name: 'Contact Us', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    return (
        <header>
            <nav className="z-20 w-full bg-black ">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-[5px]')}>
                    <div className="flex items-center justify-between py-3 lg:py-6">
                        {/* Logo on the left */}
                        <Link href="/" aria-label="home" className="flex items-center space-x-2">
                            {/* <Logo /> */}
                            <span className="font-bold text-[30px] text-[#FFFFFF]">Navmi Partners</span>
                        </Link>
                        {/* Menu items on the right */}
                        <ul className="flex gap-8 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    {item.name.trim() === 'Careers' ? (
                                        <Link href={item.href}>
                                            <Button
                                                className="bg-[#10B981] hover:bg-[#10B970] text-white text-[18px] px-6 py-2 rounded-lg font-medium pointer cursor-pointer"
                                            >
                                                {item.name}
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="px-4 py-2 text-[#FFFFFF] hover:text-[#1E40AF] text-[20px] font-medium transition-colors"
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}