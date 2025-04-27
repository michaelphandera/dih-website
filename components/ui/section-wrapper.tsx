import React from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'muted' | 'primary' | 'secondary' | 'accent'
  containerClass?: string
}

export function SectionWrapper({
  children,
  className,
  id,
  background = 'default',
  containerClass,
}: SectionWrapperProps) {
  const getBgColor = () => {
    switch (background) {
      case 'muted':
        return 'bg-muted/50'
      case 'primary':
        return 'bg-primary/10'
      case 'secondary':
        return 'bg-secondary'
      case 'accent':
        return 'bg-accent'
      default:
        return 'bg-background'
    }
  }

  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        getBgColor(),
        className
      )}
    >
      <div className={cn('container-custom', containerClass)}>
        {children}
      </div>
    </section>
  )
}
