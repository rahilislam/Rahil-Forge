import type { HTMLAttributes } from 'react'
import './Card.css'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className = '', ...props }: CardProps) {
  return <div className={`card ${className}`.trim()} {...props} />
}
