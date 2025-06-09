'use client'

import React, { useEffect, useRef, useState } from 'react'

interface InfiniteSliderProps {
    children: React.ReactNode
    speed?: number
    speedOnHover?: number
    gap?: number
}

export function InfiniteSlider({
    children,
    speed = 40,
    speedOnHover = 20,
    gap = 0,
}: InfiniteSliderProps) {
    const [isHovered, setIsHovered] = useState(false)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [contentWidth, setContentWidth] = useState(0)

    useEffect(() => {
        if (!sliderRef.current) return

        const updateWidths = () => {
            if (sliderRef.current) {
                setSliderWidth(sliderRef.current.offsetWidth)
                const content = sliderRef.current.firstElementChild as HTMLElement
                if (content) {
                    setContentWidth(content.offsetWidth)
                }
            }
        }

        updateWidths()
        window.addEventListener('resize', updateWidths)
        return () => window.removeEventListener('resize', updateWidths)
    }, [])

    const currentSpeed = isHovered ? speedOnHover : speed
    const duration = contentWidth / currentSpeed

    return (
        <div
            ref={sliderRef}
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="flex animate-infinite-scroll"
                style={{
                    gap: `${gap}px`,
                    animationDuration: `${duration}s`,
                }}
            >
                {children}
                {children}
            </div>
        </div>
    )
} 