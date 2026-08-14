import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import './Button.css'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'text'
  className?: string
  children: React.ReactNode
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never
}

type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({ variant = 'primary', className = '', children, ...props }: LinkProps) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
