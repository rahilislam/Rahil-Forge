import Layout from './components/Layout/Layout'
import { ButtonLink } from './components/UI/Button'
import './App.css'

function App() {
  return (
    <Layout>
      <main className="app-shell">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">RAHIL FORGE / INDEPENDENT DIGITAL STUDIO</p>
            <h1 id="hero-title">Digital products built around real-world problems.</h1>
            <p className="intro">
              We design and build modern websites, web applications and digital systems
              that make useful things easier to run, understand and use.
            </p>

            <div className="hero-actions">
              <ButtonLink href="#work">Explore the work <span aria-hidden="true">↗</span></ButtonLink>
              <ButtonLink href="#contact" variant="secondary">Start a project <span aria-hidden="true">→</span></ButtonLink>
            </div>
          </div>

          <div className="hero-meta" aria-label="Studio capabilities">
            <span>WEB DESIGN</span>
            <span>WEB APPLICATIONS</span>
            <span>DIGITAL SYSTEMS</span>
          </div>
        </section>

        <section id="work" className="anchor-section" aria-labelledby="work-title">
          <div>
            <p className="eyebrow">WORK</p>
            <h2 id="work-title">Selected digital products and concept work.</h2>
          </div>
        </section>

        <section id="services" className="anchor-section" aria-labelledby="services-title">
          <div>
            <p className="eyebrow">SERVICES</p>
            <h2 id="services-title">Websites, applications and useful digital systems.</h2>
          </div>
        </section>

        <section id="about" className="anchor-section" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">STUDIO</p>
            <h2 id="about-title">Small studio thinking, focused on real business problems.</h2>
          </div>
        </section>

        <section id="process" className="anchor-section" aria-labelledby="process-title">
          <div>
            <p className="eyebrow">PROCESS</p>
            <h2 id="process-title">Clear thinking before unnecessary complexity.</h2>
          </div>
        </section>

        <section id="contact" className="anchor-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">START A PROJECT</p>
            <h2 id="contact-title">Have a problem worth building around?</h2>
            <ButtonLink className="section-cta" href="mailto:hello@rahilforge.com">Tell us about it <span aria-hidden="true">→</span></ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default App
