import './WorkSection.css'

const featuredProjects = [
  {
    number: '01',
    type: 'FLAGSHIP SAAS / PRODUCT',
    title: 'SheetPilot',
    description:
      'A mobile-responsive pharmacy management SaaS designed around the day-to-day realities of retail pharmacy operations.',
    tags: ['SaaS', 'Pharmacy', 'Dashboard', 'Supabase'],
    tone: 'warm',
  },
  {
    number: '02',
    type: 'PERSONAL PRODUCT / PWA',
    title: 'Zakat.AI',
    description:
      'A smart Zakat calculator that combines live market data, local pricing logic and Islamic calculation rules in a mobile-first experience.',
    tags: ['PWA', 'APIs', 'Algorithms', 'Mobile-first'],
    tone: 'cool',
  },
]

const conceptProjects = [
  {
    type: 'CONCEPT PROJECT',
    title: 'MAK Properties',
    description: 'A real-estate website concept focused on clear property discovery and a polished business presentation.',
  },
  {
    type: 'CONCEPT PROJECT',
    title: 'Cricket Academy',
    description: 'A sports academy website concept designed to communicate programs, facilities and enrollment clearly.',
  },
]

function ProjectVisual({ tone }: { tone: string }) {
  return (
    <div className={`project-visual project-visual--${tone}`} aria-hidden="true">
      <div className="visual-window">
        <div className="visual-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-content">
          <div className="visual-sidebar" />
          <div className="visual-main">
            <div className="visual-line visual-line--large" />
            <div className="visual-cards">
              <div />
              <div />
              <div />
            </div>
            <div className="visual-chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-heading">
        <div>
          <p className="eyebrow">WORK</p>
          <h2 id="work-title">Selected products, built with purpose.</h2>
        </div>
        <p className="work-intro">
          A mix of real products and clearly labelled concept work. No inflated client claims — just work that shows how we think and build.
        </p>
      </div>

      <div className="featured-work">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <ProjectVisual tone={project.tone} />
            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies and categories`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="concept-work">
        <div className="concept-heading">
          <p className="eyebrow">CONCEPT WORK</p>
          <h3>Exploring different business problems and industries.</h3>
        </div>
        <div className="concept-grid">
          {conceptProjects.map((project, index) => (
            <article className="concept-card" key={project.title}>
              <span className="concept-index">0{index + 3}</span>
              <div>
                <p>{project.type}</p>
                <h4>{project.title}</h4>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
