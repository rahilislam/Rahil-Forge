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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-kicker">RAHIL FORGE</p>
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
