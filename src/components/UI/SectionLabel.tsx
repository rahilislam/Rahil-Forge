import type { HTMLAttributes } from 'react'
import './SectionLabel.css'

type SectionLabelProps = HTMLAttributes<HTMLParagraphElement>

export function SectionLabel({ className = '', ...props }: SectionLabelProps) {
  return <p className={`section-label ${className}`.trim()} {...props} />
}
