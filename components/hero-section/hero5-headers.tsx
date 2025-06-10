'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation' 

const menuItems = [
    { name: 'About ', href: '/about' },
    { name: 'Contact Us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfP08AmskLj8a9ubHiInL2nZzbGxg1QtBGgWdcoE1WoDWsCzA/viewform?usp=dialog' },
    { name: 'Careers', href: '#join-us' },
    
]

export const HeroHeader = () => {
    const [isScrolledToBuilding, setIsScrolledToBuilding] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname() 

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
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn(pathname === '/about' || isDark ? 'text-black' : 'text-white', 'focus:outline-none')}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className="hidden md:flex gap-6 text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    {item.name.trim() === 'Careers' ? (
                                        <Link href={item.href}>
                                            <Button
                                                className={cn(
                                                    "bg-[#10B981] hover:bg-[#10B970] text-white text-[18px] px-6 py-2 rounded-lg font-medium cursor-pointer",
                                                    pathname === '/about' ? "hidden" : "visible"
                                                )}
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
            {/* Mobile menu overlay */}
            <div className={cn(
                "md:hidden fixed top-0 left-0 w-full h-full bg-background/40 backdrop-blur-sm transform transition-transform duration-300 ease-in-out",
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMenuOpen(false)} className="text-black focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-center gap-6 text-xl mt-8 text-black">
                    {menuItems.map((item, index) => (
                        <li key={index} onClick={() => setIsMenuOpen(false)}>
                            {item.name.trim() === 'Careers' ? (
                                <Link href={item.href}>
                                    <Button
                                        className={cn(
                                            "bg-[#10B981] hover:bg-[#10B970] text-white text-[18px] px-6 py-2 rounded-lg font-medium cursor-pointer",
                                            pathname === '/about' ? "hidden" : "visible"
                                        )}
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
        </header>
    )
}
