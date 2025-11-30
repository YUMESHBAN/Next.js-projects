'use client'

import {Slot} from '@radix-ui/react-slot'
import {forwardRef} from 'react'
import {cn} from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'secondary'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant = 'primary', asChild, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'
    const base =
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

    const variants: Record<ButtonProps['variant'], string> = {
      primary: 'bg-charcoal text-white hover:bg-graphite focus-visible:outline-charcoal dark:bg-dark-surface dark:hover:bg-dark-border dark:focus-visible:outline-dark-surface',
      ghost:
        'border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-cream focus-visible:outline-charcoal dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-border dark:hover:text-dark-text',
      secondary:
        'bg-accent text-charcoal shadow-card hover:bg-yellow-300 focus-visible:outline-accent',
    }

    return <Comp ref={ref} className={cn(base, variants[variant], className)} {...props} />
  },
)

Button.displayName = 'Button'

