import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 32" role="img" aria-label="RF">
      <path d="M3 25V7h18.5c5.8 0 9.5 3 9.5 7.7 0 3.2-1.8 5.7-4.9 6.8L32 25h-7.1l-5.2-6.4H9.2V25H3Zm6.2-11.7h11.7c2.2 0 3.5-.8 3.5-2.5s-1.3-2.5-3.5-2.5H9.2v5Z" fill="currentColor" />
      <path d="M28 25 37.5 7H45l-2.8 5.1h-7.3l-2 3.7h7.1l-2.7 4.9h-7L28 25Z" fill="currentColor" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Rahil Forge home">
          <BrandMark />
          <span>RAHIL FORGE</span>
        </a>

        <div className="desktop-nav" aria-label="Desktop navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Start a Project <span aria-hidden="true">→</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="mobile-menu-inner">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="mobile-nav-cta" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            Start a Project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
