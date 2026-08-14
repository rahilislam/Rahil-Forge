import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'
import brandLogo from '../../assets/rahil-forge-logo.svg'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

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
          <img className="brand-logo" src={brandLogo} alt="Rahil Forge" />
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
          <a className="mobile-menu-brand" href="#top" onClick={closeMenu} aria-label="Rahil Forge home">
            <img src={brandLogo} alt="Rahil Forge" />
          </a>

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
