import Layout from './components/Layout/Layout'
import WorkSection from './components/Work/WorkSection'
import ServicesSection from './components/Services/ServicesSection'
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

        <WorkSection />

        <ServicesSection />

        <section id="about" className="studio-section" aria-labelledby="about-title">
          <div className="studio-heading">
            <p className="eyebrow">STUDIO</p>
            <h2 id="about-title">Small studio thinking, focused on real business problems.</h2>
          </div>

          <div className="studio-intro">
            <p>
              Rahil Forge is an independent digital studio built around a simple idea:
              useful software starts with understanding the problem, not choosing a trend.
            </p>
            <p>
              We work across websites, applications and business systems, keeping the
              experience clear for the people who actually have to use them every day.
            </p>
          </div>

          <div className="studio-principles" aria-label="Rahil Forge principles">
            <article className="studio-principle">
              <span className="principle-number">01</span>
              <h3>Problem-first</h3>
              <p>Start with the workflow, friction and outcome before adding technology.</p>
            </article>

            <article className="studio-principle">
              <span className="principle-number">02</span>
              <h3>Product-minded</h3>
              <p>Design for clarity, speed and real usage—not just an impressive first screen.</p>
            </article>

            <article className="studio-principle">
              <span className="principle-number">03</span>
              <h3>Security-conscious</h3>
              <p>Authentication, data access and input handling are treated as part of the build.</p>
            </article>

            <article className="studio-principle">
              <span className="principle-number">04</span>
              <h3>Built with intent</h3>
              <p>Keep the stack practical and the experience focused on what the business needs.</p>
            </article>
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
            <ButtonLink className="section-cta" href="#contact">Tell us about it <span aria-hidden="true">→</span></ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default App
