import Layout from './components/Layout/Layout'
import './App.css'

function App() {
  return (
    <Layout>
      <main className="app-shell">
        <section className="hero-section" aria-labelledby="hero-title">
          <p className="eyebrow">RAHIL FORGE</p>
          <h1 id="hero-title">Digital products built around real-world problems.</h1>
          <p className="intro">
            We design and build modern websites, web applications and digital systems
            for businesses that want more than just a pretty interface.
          </p>
        </section>

        <section id="work" className="anchor-section" aria-labelledby="work-title">
          <p className="eyebrow">WORK</p>
          <h2 id="work-title">Selected digital products and concept work.</h2>
        </section>

        <section id="services" className="anchor-section" aria-labelledby="services-title">
          <p className="eyebrow">SERVICES</p>
          <h2 id="services-title">Websites, applications and useful digital systems.</h2>
        </section>

        <section id="about" className="anchor-section" aria-labelledby="about-title">
          <p className="eyebrow">STUDIO</p>
          <h2 id="about-title">Small studio thinking, focused on real business problems.</h2>
        </section>

        <section id="process" className="anchor-section" aria-labelledby="process-title">
          <p className="eyebrow">PROCESS</p>
          <h2 id="process-title">Clear thinking before unnecessary complexity.</h2>
        </section>

        <section id="contact" className="anchor-section" aria-labelledby="contact-title">
          <p className="eyebrow">START A PROJECT</p>
          <h2 id="contact-title">Have a problem worth building around?</h2>
        </section>
      </main>
    </Layout>
  )
}

export default App
