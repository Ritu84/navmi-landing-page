import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
    className?: string
    direction?: 'left' | 'right'
    blurIntensity?: number
}

export function ProgressiveBlur({
    className,
    direction = 'left',
    blurIntensity = 1,
}: ProgressiveBlurProps) {
    return (
        <div
            className={cn(
                'absolute inset-0',
                direction === 'left'
                    ? 'bg-gradient-to-r from-background to-transparent'
                    : 'bg-gradient-to-l from-background to-transparent',
                className
            )}
            style={{
                backdropFilter: `blur(${blurIntensity}px)`,
            }}
        />
    )
} 