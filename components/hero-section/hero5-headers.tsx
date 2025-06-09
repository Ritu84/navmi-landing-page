'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation' // ✅ import this

const menuItems = [
    { name: 'About ', href: '/about' },
    { name: 'Careers', href: '#join-us' },
    { name: 'Contact Us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfP08AmskLj8a9ubHiInL2nZzbGxg1QtBGgWdcoE1WoDWsCzA/viewform?usp=dialog' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolledToBuilding, setIsScrolledToBuilding] = useState(false)
    const pathname = usePathname() // ✅ get current path

    useEffect(() => {
        const handleScroll = () => {
            const buildingSection = document.getElementById('building-section')
            if (!buildingSection) return

            const rect = buildingSection.getBoundingClientRect()
            const inView = rect.top <= 80
            setIsScrolledToBuilding(inView)
        }

        if (pathname === '/') {
            window.addEventListener('scroll', handleScroll)
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathname])

    const isDark = pathname === '/about' || isScrolledToBuilding

    return (
        <header className="fixed top-0 left-0 w-full z-30 transition-colors duration-300">
            <nav className={cn(isDark ? 'bg-background/50 backdrop-blur-sm' : 'bg-transparent')}>
                <div className={cn('mx-auto max-w-7xl px-6 lg:px-[5px]')}>
                    <div className="flex items-center justify-between py-3 lg:py-6">
                        <Link href="/" aria-label="home" className="flex items-center space-x-2">
                            <span className={cn("font-bold text-[30px]", isDark ? "text-black" : "text-white")}>
                                Navmi Partners
                            </span>
                        </Link>
                        <ul className="flex gap-8 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    {item.name.trim() === 'Careers' ? (
                                        <Link href={item.href}>
                                            <Button
                                                className="bg-[#10B981] hover:bg-[#10B970] text-white text-[18px] px-6 py-2 rounded-lg font-medium cursor-pointer"
                                            >
                                                {item.name}
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "px-4 py-2 text-[20px] font-medium transition-colors",
                                                isDark ? "text-black hover:text-[#1E40AF]" : "text-white hover:text-[#1E40AF]"
                                            )}
                                            target={item.name.trim() === 'Contact Us' ? "_blank" : undefined}
                                            rel={item.name.trim() === 'Contact Us' ? "noopener noreferrer" : undefined}
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
