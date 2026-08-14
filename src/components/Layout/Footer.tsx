import './Footer.css'

const columns = [
  {
    title: 'WORK',
    links: [
      { label: 'Selected Work', href: '#work' },
      { label: 'Concept Projects', href: '#work' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { label: 'Websites', href: '#services' },
      { label: 'Web Applications', href: '#services' },
      { label: 'Digital Systems', href: '#services' },
    ],
  },
  {
    title: 'STUDIO',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Start a Project', href: '#contact' },
    ],
  },
]

function BrandMark() {
  return (
    <svg className="footer-brand-mark" viewBox="0 0 48 32" role="img" aria-label="RF">
      <path d="M3 25V7h18.5c5.8 0 9.5 3 9.5 7.7 0 3.2-1.8 5.7-4.9 6.8L32 25h-7.1l-5.2-6.4H9.2V25H3Zm6.2-11.7h11.7c2.2 0 3.5-.8 3.5-2.5s-1.3-2.5-3.5-2.5H9.2v5Z" fill="currentColor" />
      <path d="M28 25 37.5 7H45l-2.8 5.1h-7.3l-2 3.7h7.1l-2.7 4.9h-7L28 25Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <BrandMark />
            <span className="footer-kicker">RAHIL FORGE</span>
          </div>
          <p className="footer-tagline">We turn real-world problems into useful digital products.</p>
        </div>

        <div className="footer-links">
          {columns.map((column) => (
            <div key={column.title} className="footer-column">
              <p className="footer-column-title">{column.title}</p>
              <nav aria-label={`${column.title} links`}>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Rahil Forge</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  )
}
